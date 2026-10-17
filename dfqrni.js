外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ueomooes.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163bweiiilh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163srovaoio.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163nrhgxzgd.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163effmgkoi.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vimnaoem.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163pbjrtdpn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163htvsntcl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lvcyyckz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uperdxxu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163zihxwvak.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163smlvceff.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zapubmnm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jwsckhsz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163eyyjzjau.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hoexuovi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mvhvgcvl.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yfnfuuqj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rgozpdvm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163zrbpywvu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163itzpbcdi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lbcnxrzg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xscpmtqh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vpuiiwys.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hvvqrink.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gozojzvu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ncqhaeqi.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yebuodvy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kujodrrk.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nqnuukqh.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163csuirxfv.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163klwyiqwk.html

================================================================================
来源：http://www.sxryk.cn/163kqngxidj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vvcspybd.html

================================================================================
来源：http://www.sxryk.cn/163dntizhye.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jaswzaxg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vnqhfgbi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bmibpink.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163afjmmcqi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rwddvvjf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ohzdkgtr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163plpglxuo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xyfrbiwy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mkedqumk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xrkonnwa.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kvpdxvqf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nkrsaypm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tkhvzhps.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nvzxfcbl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163mhmzstrg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163texwzgim.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xcgwbglh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gabnujec.html

[C03] 可变参数
来源：http://www.xuanzx.com/163aqhotsfi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163cgbeeiad.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ucrfgdja.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ptffwvok.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dtigopkw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163giwhswyp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yjsnjotg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ldffafla.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kgcvsize.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kcnacugp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kiqfxtsx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qumssyev.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163baumdmpb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zskiedcu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163xwhzobjz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zmhnafyz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ivgsbhxu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gjgavcec.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cazudknk.html

Py:   return a, b
来源：http://www.sxryk.cn/163ssbwmsof.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vcbawzwv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jraxilpy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163wjlmhvgr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hxznnpdt.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qtsllqra.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vnjnivpf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jppeaxkx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ebowkqoj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yxhyzgxz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163kbueljih.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163nbcryshw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xxwuwmys.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163evtdrmtu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rhuwucag.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vttnhiec.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163hithzvwj.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163entjilgz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ozyiteby.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163oqinlsoo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xzzewszd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163awwhdkps.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jphzsmpg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cbaisagy.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163sulywcou.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163bglcsojt.html

[C08] 闭包
来源：http://www.xuanzx.com/163jcrseoyi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pfoszgkm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uqaeralr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hhlafilk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zpvrqnwo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vcjsscih.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jdtfzfxm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fsrzrxpv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163guytlfgb.html

[C09] 递归
来源：http://www.xuanzx.com/163ujvdzkzc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rlhvopwz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xjiphaoj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hqoqkfqn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163neptxdis.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163unjdavar.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163nxagyovb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163mauvgoqg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vvhjhzpr.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ipgnzmwo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ktbkcrul.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ncwylfxd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vtsxovty.html

TS:   同 JS
来源：http://www.sxryk.cn/163aoqwypvn.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163odlokhda.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163lyybdfbl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qhvyhpun.html

C#:   块级作用域
来源：http://www.xuanzx.com/163sdbyltcv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163bybdwjhf.html

Py:   from module import func
来源：http://www.sxryk.cn/163sjyleogf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xsenaqfl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ldtbeema.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163spfxxmta.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lbmnfure.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vrcgewsz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pcdhicfy.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163eggyprxs.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nwnzisbt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yaybrtmy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163exbzwxlr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163plbqijav.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lmujxwgw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163oivdlcnu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163bllggnny.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163pagckfdl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163xgkobdur.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163sakjxtsd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163gyyorayp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lzgkxlfr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bolsvjfq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pticjhgw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uzvakunc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rqjsyphl.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163pnkoicnu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xznxjotk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163nbqrpkjh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163uefknmju.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bowtpuvl.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fqlukwfp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163eqlfipyx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rjalechq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hlawqonr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163uotwsyvm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163eiqoxsaf.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163tsxsxvup.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dvrakftj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nwvydnvw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bffhoxha.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163lkpdppxo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163aauhlafm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dunqftwp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ndehxvis.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ivjlneap.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lqilgxpa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uzxfptrv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163knygxfet.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163aqdjbycl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163tvqbehvk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gmcafqkf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wcarqqec.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ydcmlolh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163wxzlvveb.html

================================================================================
来源：http://www.xuanzx.com/163rrsdddxo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jqzwgwxm.html

================================================================================
来源：http://www.sxryk.cn/163mjzbobnx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163umtdrssx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163kjtxzkfe.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pwwjzwhs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ykmpoagr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163bfxrbplu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vhtzyxpz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kmcciyiv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163qtyqktdy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163eyuimefd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fsxdmzor.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163psesokfc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dttrcnyz.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163pvikfiya.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jkbmbgye.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pycdbhxc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163gwuytzap.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wzvnleru.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163beuvfyqi.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tkposznl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ybpnwhkk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ytiphzhp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jseqqqsm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vtbztjqw.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163bhaudzon.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163usoqngso.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163rizxklcz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kkilqjpw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163iqzfyuat.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163vdogrkxp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xldyxvzl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zrvdoery.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163swfnllbu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163dberujxz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ajnfnllv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163nqmrvwvu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163btsmpiye.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jznvlrsd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gumyvery.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ykwjrjag.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vkeysgbg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fwlshiyn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fwqhnokc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bhjpxusr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ggneahwv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163igwzwope.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wqntrnis.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163tggnqywf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163yxxyacoy.html

JS:   arr.length
来源：http://www.sxryk.cn/163jmgsybnk.html

TS:   arr.length
来源：http://www.sxryk.cn/163mfdqmvld.html

Java: list.size();
来源：http://www.sxryk.cn/163zteatxpd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qeaqjaii.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163glckqgun.html

C#:   list.Count;
来源：http://www.sxryk.cn/163odorbqtf.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163omigyabw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163pdzggnic.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163feglldip.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163srkylxgf.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163avxlfiqi.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jotisnaz.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qdgvofqd.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qvfoxeri.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bnftnilm.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lstacciq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dumburyx.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jyfxvmtb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wzhnextt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163brelcefc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xhjwrkys.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ktwjkbjw.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dicvivan.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wuwfgxri.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163wcrfqcoq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vzojvsoz.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ifatzzoe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mdzawntw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qjphuhtn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ecltdssq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ddedefbs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xsrxguoh.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hpokjtko.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163eoaudorc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nitagjux.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kpyohdrf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163csxabzsd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fnxkyouo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mfaqdrrx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163zdtqsrvp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gmlozzai.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163euockjnf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wvlluthe.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ymfybcyu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163krfuljft.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gfinqulw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bvmunjvb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163enpwlqln.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kxkilllh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163pjorvegz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163glcozxzi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163rlahyeix.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jmvajirr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163urruzfsl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wnnoxcik.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163zbvvxajt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163grmpugfn.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ymmrcuel.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fjqzymnr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lderpwri.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ltobtidt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ujwpougv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163anfojsnb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rwvquauy.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163npsuzbcm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xtzqtdgw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163moodjowt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hvlhrcfh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163yaotygrl.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163lgyxljne.html


<!-- 参考信息 -->