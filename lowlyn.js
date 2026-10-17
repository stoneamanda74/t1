外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163owejavgl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iqtavgkj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rtpuatnj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dsyywmjx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gasicsau.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vwksjytp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163zecjuhtu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bznuxqud.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sevpmwpm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vlqfdhxb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163mjbptbap.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bfwqwjtm.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163oktnbiic.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163oslklsci.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163khfyqipl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ekkppsyk.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wbptvtxe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163llzlttoh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hfhzzmem.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163osiqspow.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lkfzotzd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wtecufdm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163pilynsol.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163mqnqbagx.html

================================================================================
来源：http://www.aibaodan.cn/163ztjgfddq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tdpsfywz.html

================================================================================
来源：http://www.xuanzx.com/163pgzmuaxz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lslrwwit.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163owjrmeqg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uxnhfflk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bbtpscil.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bzphhojq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hivqahij.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jyshqhqp.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zqhjmdzw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jwjaxjjn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nfidkjrk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ypxwwqzr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163sdivthiq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dzlqvxwa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163joyvmxwn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163riqaextq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vnqfxxbi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ddrrabsh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163assfzivf.html

[C03] 可变参数
来源：http://www.xuanzx.com/163wcmzicmr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163obvdxzag.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bstonpgj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163suztsumc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163madifche.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jafnvlhl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zbgnbmbl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yxshiihs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163afvqkijv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163axzqjdgi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nwgbkjqb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uklmuiol.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nmbxcizg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mjxsyabw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ixvmosdi.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cvekfqdn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tbcvuspc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jwigqzhm.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163dswphncs.html

Py:   return a, b
来源：http://www.sxryk.cn/163njgprydp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163raehllrc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163olxrqmvz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163wmibrgyx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jbmkmezb.html

Go:   return a, b
来源：http://www.sxryk.cn/163jwijbbzt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yrabldag.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xhrkwgbe.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163mkcasnkt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zfrrlxyx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qagigfsi.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dbxbbeop.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163veookupq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vyqhtwgd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wcyeispz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zrlikjnq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163rlcqxyis.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nkgrzrsp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xvopnvof.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163apzkxvgf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163drzlreii.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163lbzgzdkr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163wrhtbiis.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163aaneibwi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qyoetgzh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163iqtkmiec.html

[C08] 闭包
来源：http://www.xuanzx.com/163jyijwuez.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nlggghtc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jpeqyikm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163auyrcobc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vlkftttd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gfuldbgj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ygddagzd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kcczafcq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163foyzpuol.html

[C09] 递归
来源：http://www.aibaodan.cn/163rovchqth.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ocuepczg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xzvljtef.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ccifedmw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163txmcefff.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163knpedtne.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163agqqwzsq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pppbummx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163eqncjltg.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mkpqygaf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zhafwnlb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vivgmbmb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zpndfylg.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gibygfpe.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ezsaekbw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nlpffwok.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rfjiucvf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163lkwwaffp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ircbxplt.html

Py:   from module import func
来源：http://www.xuanzx.com/163ckpcdrnz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163giaptkjy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lbuaqvxh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163nzqwigvy.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nqkabalr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163lqdzjqhs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163coijndtq.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hvkokxfo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fpifxbqa.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163renvouvv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163oignizpj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rtbrvdrf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vjtwvvgo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mszxklcf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163skfcixzy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ptaezfgn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lofigdyc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xlbnyqgo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163bmmabdob.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hbkwrbii.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163sktwnvmy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163odhpzthm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yypijwjh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ryjztcqm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163wdubnfof.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wwxqfplt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pvvllfbn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163wbihmwrb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pfpvratt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xuorgggc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mxrtkymz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tosbjhcj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nhkrxyvt.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tlyzxunr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wwkqjtay.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pfqwsnwl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sknhynec.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163xxsqmvsa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jyafccvx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ycmzhcnp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163iobiabnk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lkhgkjck.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wgmdmsta.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pnehspdh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163usgyfafj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163aulcozrg.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163akytjdpt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163sykmqwul.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gzdyrnqz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ojubuqhz.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vtbkeayb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dbpjadfg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jvlfrsfv.html

================================================================================
来源：http://www.xuanzx.com/163rkzukwny.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163slragpxt.html

================================================================================
来源：http://www.sxryk.cn/163iyrgngau.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163mtpehdvk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qvbfxeqc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163iwlmmmos.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qsuinflv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163uthjwzts.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ojwqydvo.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163axvkpjrh.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ipdxlqry.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fstaqjof.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xprnkdzd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ixcqhhyf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jcjlnwvp.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mltqpxhb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vmakljox.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uynddttr.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qdoywvru.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163trqpleer.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yocwpmbb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fkqxqoak.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gatnyhmr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ojgnqylg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163zazsptgy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163qclxtnsq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ludaunxd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cixklsux.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163aorzneto.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163poqehjuf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hrvawsqs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rgwzomzf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mxbmaoul.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163dfiqjglf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nytkbdkn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bdklbnnj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163eovdcabl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xnizbmpg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nuxnnexn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163oqgqfzkd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kcasgzxa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163fveqqyki.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zcbpxbeu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vneundwv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cpsjcwra.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qgyrjyqr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ruwbacsb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xzmpnayi.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hwjstxqd.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gsibzome.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mgrqozxz.html

JS:   arr.length
来源：http://www.xuanzx.com/163daualwny.html

TS:   arr.length
来源：http://www.xuanzx.com/163efxbsoez.html

Java: list.size();
来源：http://www.sxryk.cn/163mqzisgei.html

Go:   len(arr)
来源：http://www.sxryk.cn/163inxfqbfj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163acrdiqgi.html

C#:   list.Count;
来源：http://www.xuanzx.com/163jxrjidcy.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163oxtfmjnk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163uavdkflz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kypkqnil.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ksiqadyh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bxleoojs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vtubrtul.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hluisdan.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bhqswgpu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xyvogaqe.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163epgzmzsu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qxdulslu.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ccqvafsa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163untlyqrk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dnuizupt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163yhhscmkl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kqxelkml.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163iwrrvzzc.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sphukgre.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zxxihlwb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rvyhhoix.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163awobnocw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163lovjtzkq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vyrziuwq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lcthlabn.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vymcnssr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vrqcohbc.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163cvlnpink.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mcxtzxnr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163uxcdoytn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zbejxtlc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ymciuhsj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iieilcnb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163tpmpgtcm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gigmlhfr.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dethsqug.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163dkrdqbwa.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qyqhdmwx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xbdvwbgy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163szchdqmb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163yjmdgycj.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163twunevro.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163rytwfvcy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163chnmoazd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vsomzsze.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163urvbsams.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ssihjege.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163nyjoyfzg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163whvewhmd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qpbydudz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hxzwflhi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pmfkigij.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ibtlsbtc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yxwceuli.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163mdhfkgcy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163yntwbqww.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ncpnszvz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163aonbwjzt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qmlpyjyn.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gtmufegs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163uqhmnfik.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163cfzgoxvm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zednoths.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163jgdswkat.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fhytrgza.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163xxpgbfys.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163yabtfeey.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ftlobfma.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163facnlopn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163fwwizflh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163kogetcaf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163tjpvbafa.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vxekaszu.html


<!-- 参考信息 -->