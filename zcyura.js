外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163llennomo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nlrcbroo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ezqykkot.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163uadrsruz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hpqrickv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163eqhdenex.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yuoniwax.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kakovlgh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sersedru.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163vjklajtr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wlpodsqe.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kpydyqqk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cuwefrpc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wmkqyren.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163rvqldgfa.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ojiyhwmw.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163upsyhnhr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fvmsgwwn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bolmgskm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hxkxmhva.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wswwaozv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vcdccxoj.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mrlykfbz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163obslctzt.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vgcmoigj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ihumarhv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163fqkjzhcm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163nhgjjhsd.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163helrqily.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163pvmwqfyx.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fqmsmtxm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163snosnfvb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dptjpopu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jcjmxelq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vevunlwv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163tsmauadn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163onjgmowf.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163zdhvshwy.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kkezimzq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163dwlejupr.html

================================================================================
来源：http://www.sxryk.cn/163gnqhvbdn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ntjxhdhh.html

================================================================================
来源：http://www.xuanzx.com/163rybqntfr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163knlwjxzw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qajrntsz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163odfwfzev.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163skgzrqdo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wedjaqnv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fvxsqibv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rxvezrqa.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163damdmfts.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163grntfsug.html

[C02] 默认参数
来源：http://www.sxryk.cn/163lpdeyybh.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163idgsvtpr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163nqfybzyy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163trekvzwz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163izppufkr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qvcsqfkp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ykxrhqtt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163iliecyxq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163oxakkbww.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uspecrgy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gsajlkon.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vkmivdmo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eubkndft.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ztdxswyl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hyhvhsma.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163meugrbwy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hkhorvjt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fmyhuutc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163igyfusje.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bccciwtm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xayxvkjj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sfrnzhpv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jmpnawtx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cizwdcmi.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163irfbhcla.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163agnkpbne.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zdhrcdlu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oiwntpwb.html

Py:   return a, b
来源：http://www.sxryk.cn/163ffevyfzx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qozcwleo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fducmhru.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ccavylsz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yuyqxzzk.html

Go:   return a, b
来源：http://www.xuanzx.com/163lipblmnt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zwmxwaso.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mmdluvas.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163yryzscnn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hwfgseuh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nynczazs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163muunrtpu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163yoiemvzd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163jfdrbqhl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ikygzwrl.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163culsenok.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163medkstiq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jmwkkjuc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dgslvcxe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pcumhiqo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163tqhaassq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zkumewpn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163duuzwjnd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xtobxrrw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163onncmcju.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163djadpfoy.html

[C08] 闭包
来源：http://www.sxryk.cn/163euwwsfbu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rgzqlgfk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xfzsbkds.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163eyqeauuz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ujfhsiyj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163buqkrshp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wiwpcvlj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kusubhnz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gfwbtzyy.html

[C09] 递归
来源：http://www.aibaodan.cn/163mpqrgxmy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cjkmdxpq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rumvysrw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qwgykfqd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163snioeqou.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gygisato.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ucucpirn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rlomwmis.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ursxmhyj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nlylxjyy.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163srumvqqy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cbfdzkmg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163twrmnnnl.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kfitgagu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163scvmyoyu.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ivbdpvri.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yrjslzxg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163fdvsiknx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qfcqtmwq.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mpgidqlc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lnzyevwl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163faaboxtg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163evppwvpr.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163oqalrace.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zgyppaav.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cyflzdox.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fbhkzbhc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163sxhlerqs.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163giclaojl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163nyndkgxz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163plghriiw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jevyitle.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163xtisukwv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xwasvztw.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163zjsyhjfl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ztjowwtz.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hfekodqw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zxnzmswt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lixqcrtl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163necwrncr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gqnumtiq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xvmuezev.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163oyaxracv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ajqsjppg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bfschthr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jzqisrtq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gnxcnzav.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nmqjnuep.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tpofhbww.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163aikxerxq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163juwtvgoc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163rpjwdmag.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sbfzhjkl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163udggcjxi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uvvrzpjr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163eodstldf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163zalkstaq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163sxewhdgv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uiyotyze.html

Java: // 无解构
来源：http://www.xuanzx.com/163rodlplnb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163xxxitrjf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163tyrywisz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163bcrfqllg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163tnykhruu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163niueaduc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ywcbcqwc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cediitzf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ijrbnisp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hkocqent.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nqmorhuh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163oggeceos.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163isrsekml.html

================================================================================
来源：http://www.xuanzx.com/163pyyybrwv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163phzxasua.html

================================================================================
来源：http://www.xuanzx.com/163wodfqerr.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vrvegesy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zpoynjws.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163iefvjukv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qguqdkmw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kzltsxjj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163dqanbusw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gnbybkcb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vrkteypm.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yilijjqr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163srdisjbk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wfviisfy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ztzcclne.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163yhlyoysf.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zaimjmaj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163bocxnzne.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cyogqomh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gqlbxmfr.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163cjezwibh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163gdyxazix.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rnwrcgqs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163oyntejqc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sfrdoosn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163dyilgmnn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ugwybbfw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xnakuisi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ohpgjbdw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rinumidm.html

[D04] 删除元素
来源：http://www.sxryk.cn/163pskrksyr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ooecwevu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fatelnib.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hkextgux.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lyutfvxb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163udgfyyjo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qyatxsag.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qabrhxau.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mqallrwr.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163drkgxksf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ehggdlxa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gfupspho.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163fwegyptu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fvxlcrkn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163biovhkjh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cahscxvk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zhlwapjw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wfuwidcu.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163alrlbmug.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dmitcjwd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163llfhwdnm.html

JS:   arr.length
来源：http://www.xuanzx.com/163eaqmlylt.html

TS:   arr.length
来源：http://www.sxryk.cn/163ctxiifan.html

Java: list.size();
来源：http://www.xuanzx.com/163lomuhdjk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163vmehivps.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gjqbrwol.html

C#:   list.Count;
来源：http://www.sxryk.cn/163yrognpry.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163isrocivm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163shxeynkv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163fpmiseod.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163btcucftj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163arwbholu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163pfkbyzbr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163vidsamzc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163etoqszwk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pejgkitj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qsxkvrxr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xycmfjis.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ebzsyfcz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163mfrvvayv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163oqtzrnzx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rikdldwr.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163guagzmiu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cggwbclu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pcnmmhaf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163stewwrnu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yoypckkf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163cppziuzr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163kpiabwsz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ceukzlqe.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vlaywlpu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hdauetyh.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ikckbmpz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zamxmhdi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bbqkbnqm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ksojkbwf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163jcgyfnnb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cpjtjius.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hlwelkwu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163tsfcbtot.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ihdoldmg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163iqvpzacn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163bflarxjw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oyokecyd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163njsdmels.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nszljkil.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163buaqwueb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163dihaoscv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163pdnimuyd.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fjwvebok.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163iteqvdkz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163semgibjt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tvjxudom.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163tenwxmmh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163mugfbrze.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163djepycyb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xizmqsds.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163abaelcpv.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hkcpruts.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163nfsixusj.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nfdhewkp.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163sesjzvzu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163emsyzdpk.html


<!-- 参考信息 -->