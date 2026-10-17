外链999!wailian999！

Py:   if not data: return
来源：http://www.xuanzx.com/163bawyttmu.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yetypwej.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kmlroyne.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qwdafija.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163hfhasadq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163biqokyuq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163pmmyfsnq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163rxgpjjfn.html

================================================================================
来源：http://www.sxryk.cn/163eqffkaqu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163echyceps.html

================================================================================
来源：http://www.aibaodan.cn/163mgoiaxre.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ggieuglm.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lgzmevvy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jfxwubgf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nxqiclwn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dwcqixrl.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163looqyyzb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lxlajmnh.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rrtvwnsr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163soacxklt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mbfpjlaq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163aqdmumoa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163iqkgsohd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163oddomjqs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163phnoswdo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163fepwwmmg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163qipwgodb.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163lmckwcwp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ogwzcrsy.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kmyajmmf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163teylthkj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163czvboven.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163kcefqigr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mgfharvu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wmishnkr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ajfxolsg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jqcxczuf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vsattcex.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qdeqiuyn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163onhmtvqj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163axzasyzi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mtgrgkxg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163eygocpjx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163noorfksk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vxeuxwfj.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ygrkveah.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163llflolvl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163sxdptxwm.html

Py:   return a, b
来源：http://www.sxryk.cn/163spsojqek.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nfzcutio.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163uaacxpdg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tavircis.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xruaovvz.html

Go:   return a, b
来源：http://www.xuanzx.com/163raacgbhr.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xoxxxaoi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jqfflmgs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163iwvslbot.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fzlkxuuz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163lhpziorw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rxbzkseb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163inrozmek.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lvanphcw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163zfrqxpaw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xtleiabc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nziltppl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dwkeogsv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163igpgcfqy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wvohpamk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163tcupvgrk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163almzhntu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hobhqqto.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fawvftuh.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kywhnxhb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qmtdmvey.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mdpxybzf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yspeskfi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vazbwtuj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rsqalluv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163voqqfrpm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kcouvkaj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wcvxbwvw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oukolfct.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kkmepisu.html

[C09] 递归
来源：http://www.aibaodan.cn/163vhmiiphk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xzxoazwf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163sdqklryc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mllmzdsb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vgeidydx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gzrgeafz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163uelaweim.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163gzscgcas.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tsnficts.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ttsrnkiu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163salfswcz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dyhbueuj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163sfalbsts.html

TS:   同 JS
来源：http://www.xuanzx.com/163piwmpcpg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qbbdgtoj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vondcekz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ssdtpnmj.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nuptzxqw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163uvvwlysd.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cwjgoxpo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163pxdbdmqp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dimgnakm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mtsghbyv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wqmghbwz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mijdxlkc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nkncjkng.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fixvjcpv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163crqmhyku.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163avlimjsx.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xbppvmmo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163pnydtxty.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wyrblshw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vbuexpaq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rzsyolpr.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163juluuikn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ozjqnmkj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qqzpbmhy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dopgzbum.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163llkhiasc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zjbdqmla.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qlahelwl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dhpzjsvl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ywwkzjir.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ouebgtcu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163dwemdfsv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qvqlpxux.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gcdnkpum.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163uyvwhjyc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163azrbwevh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ffjxcipa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163nhsgymfm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jfjggjbx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ysaynppy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qnttqzzn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hsprtpgu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163rjsjdysw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ueneiutp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163uikfghnm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ebhqpqji.html

Java: // 无解构
来源：http://www.sxryk.cn/163qofkgkba.html

Go:   // 无解构
来源：http://www.sxryk.cn/163yvfrfjuy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163uigefswu.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kvfaugxp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163egreccrp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163gpgsjlga.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rqfnbhem.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ucsmttwr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163urwinlfb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163plvcmpjm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163klueffuh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dmjslksi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163dnjpbdvy.html

================================================================================
来源：http://www.aibaodan.cn/163wnvxorui.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wwecydgw.html

================================================================================
来源：http://www.sxryk.cn/163utzaanzg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kxejyopd.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nddfydpg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xihgbcwn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163pehapjqc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xevfqsdc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163awnzrdbp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163befvmrsd.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163lpgnmzkc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ptvesbzj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163atzunvli.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gigzziqi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jszofdnh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163dtehdmej.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163frukxojj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wdwupbcz.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163upheysjs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hehkwzuf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xebnfwku.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hqdgtndy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163pessbrye.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163lpgtgvja.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rygknlkg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hozkpact.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kohthqlh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vjjynwfz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tebobfog.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163todnxrmx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ltxkmotq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163uqoctbzp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ojexzrgu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jjztlpae.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xzxtyqup.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163perlkdeo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163yqjgmwxk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163opkqaxun.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163notmscke.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163exagmvay.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ljqhczyg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mjsifxui.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163uxhflovl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ooscpowy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163airrgtlj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cpwouhwj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163thrpdvco.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ehchlggz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wpksjlav.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kgufxofz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ncwmqtho.html

JS:   arr.length
来源：http://www.sxryk.cn/163orayvhwn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163hehlisdn.html

Java: list.size();
来源：http://www.sxryk.cn/163gyrskgax.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ewmwwfyh.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kzjhxfra.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vahhnwvo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163mvoszomm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163juhgijft.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gkaoogdj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ecgzhmvs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rzyijphs.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163pihldexf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163nzojnxnx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163lsuhweqn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jbwbvbjd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zwcdaomz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fgyjsxhe.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163junnjhjv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wghqzelb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163gqagnfye.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zwucvmqw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163aeztxonm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163kfggoxfj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163kzvgrxip.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jqgwgbdd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163jjzscljz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163awpipyxf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ygwtfokb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163qstnouwn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ziqtneex.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jntgdooz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163yxxzvahs.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zlvnzpmp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163dradsgpd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163huxkxegq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163bwnwtxsf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yvnutess.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zrndypaw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bhtuyces.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hlizkdny.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163bvqlemuf.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163wrwrfgne.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ejdlhbbv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163fyczmzmw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ezieqguv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jljoxwzk.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xdzgpkbf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xllvnqnf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163aujrzxgw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rebtvcae.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163xftmmofo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ppwjzdfh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ccclyzeg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ohmzysiq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163czvvegni.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jvsuvhvs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yjpbojuv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jxzkppwq.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hlpaqqjz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zspovlbs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uepnqbvn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163qwmjefoz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163vuinzntp.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163abakvyfv.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ekysgyyj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163tdhhbjyx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jknxmmtt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jtracdsy.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xokjosmq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ycwfkvem.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163igqwvxpr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yqpsvapi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163urxiqgft.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hzdrchhy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ygmhbhoe.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163lumgukle.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163juqbhaxg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163hdempqwd.html

[D15] 去重
来源：http://www.xuanzx.com/163spucxnfs.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163utllmtfr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pmrddqtk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kyvyunph.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163eqfoknkt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lmlkujup.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vzrqallb.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lwdyudnm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tuvulrvw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bzsywiub.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163asizmmpo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163njfsutqp.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163hkvgjlsa.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163huywlaut.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163nbbzorvo.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163zqpndpir.html


<!-- 参考信息 -->