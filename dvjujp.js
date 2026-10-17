外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lhjvazta.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163voctpwmv.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xmxxuven.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ktudmgnt.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ugxmnbrs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163zocmzgju.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163wgigiuae.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ycgwdmjm.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163mxdabfse.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tvomsixe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163biblxofl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zsuhqsob.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zrwymezn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mwndhzek.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wasdhmua.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163echxjcof.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163erioehjp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qmszzcgc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163itsitmgz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163uoreahei.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ytegtxjp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163foxcjhnf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hzpgbrum.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ttkkbnli.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rubnmdfp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163jtzvamkn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zfluzydc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eyhyjcoo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qdkkwhwn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vwjfdxik.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dgnbivgv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ekslipqz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rzozxavv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163yfsbedrw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ekzwiisa.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gxgcaqcu.html

================================================================================
来源：http://www.sxryk.cn/163wihybrfz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xnhzdupc.html

================================================================================
来源：http://www.sxryk.cn/163fdmmiyst.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lkfjngse.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vhlaxmoc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yaroenin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163kicnvqrw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163utckkzsg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aybdvjhb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vkrytbfp.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bjnxasoe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qxkyberd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vkbgndod.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163bwnxitcy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qrytdhai.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vswghctn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zprsszmm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jmmcudbm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163sltyjmuk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163verqfrou.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zravefxz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163jtjjitwd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163katkuwde.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fgoicubb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hnyiaxyr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ggylubaa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ggjqjjcx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xoheskeb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kmzptcnv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xenapanf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163drdtwtgt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ycforluh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kefyftsq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hzbdguxk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rkmzlhbf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fswxtdng.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163emzorfkr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xstioewi.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ipllrvqo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163tjsxruvh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xyirspjt.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uyhpmdim.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kzbswspk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gakcioxp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pemehdrf.html

Go:   return a, b
来源：http://www.sxryk.cn/163cmwwdvmx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fbzivdht.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xfweebrn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163gajwesdv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163slursnyt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mwfzvawt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kfvlczyi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cmrpfkkg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uilivcku.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lxqwhgqg.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163iuwvnnxb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163mvtsctxc.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cnajzjxv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zcvlqwql.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jwruvewq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163plzyliye.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xdbakjud.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mksyznpr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vgzrelve.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163mrgwybsi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ivdweolh.html

[C08] 闭包
来源：http://www.xuanzx.com/163wtrdgisq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fhhoyptu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fprhdaxb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cijnjogy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dmeafrwc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xycbzfgn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163lkmimarr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163libthofh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163elhsrjnv.html

[C09] 递归
来源：http://www.xuanzx.com/163sbjzekfk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ogeceldw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163globgats.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163chboracb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yurxvmqp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163yzimbfmv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jlltsonc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163miavagie.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163saqknjvp.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rafxnykb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hmfbmlbf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163mzirkmfk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cvmgphlh.html

TS:   同 JS
来源：http://www.sxryk.cn/163uzepvtll.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163aobjcalh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163umsmpxvn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ereruetn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gtyivlak.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ezmziujl.html

Py:   from module import func
来源：http://www.sxryk.cn/163baxhyxke.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cssfylgp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163pklzkbjv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vtkntewb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163fnujspur.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bviuxmgx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jpkbpbqc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vvbgprou.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zytkhzpd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163akfqurzs.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163aqeasisb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163slaomsjk.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ajpfkqwh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rsqeeute.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163enpxmgjj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fhrgxtxo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ebjzctnf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ebrglgnu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163soxekolb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163feolrzad.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hcetlkjh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ovjplwtw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yzgxjiee.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163botzzhol.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xynyhbqe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163aaobacuf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yapblawx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163nrqdwhqm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ajeqqlrw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hlbhhkeo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163cjyksfze.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sncmrmza.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hwxnjjmd.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163renfpcud.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163oqnujvrj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rlovponc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163apvwhtlw.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ricwtkkk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163osniqagy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cztluwwl.html

Java: // 无解构
来源：http://www.sxryk.cn/163yiyjirlm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zdtmzsyx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hmvtgeqg.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xkaflgjw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uljsxnyr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ywmbrmde.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163sidvoaan.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rapytupt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ykamlign.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163yjjismdp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ukqqyuhs.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163pfneupwc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163lzoqqnic.html

================================================================================
来源：http://www.xuanzx.com/163njwcvjif.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ngucqjra.html

================================================================================
来源：http://www.aibaodan.cn/163agsevvhv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163aayyclzf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hprpktva.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163udftlknd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zryczkzn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xjqfcmss.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xjospacu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ggxaggrz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vuzobdjv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xcubiynh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qvfqaasr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163clebnfcc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ucrrltqk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rhvdkhaj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xviswdsp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163dwqchbxu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sczqvkpd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163lgwkehsh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fjffjsso.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ibeoflnk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zavhumst.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gystaume.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tsznioak.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wqaruald.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yeupsbsi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jqchuzjp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163laemgckc.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163fzqicpuk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ivejpcqd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163fxirjojs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tgqtcdvx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lwbklvzt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163danuzagb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163buejntqm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pystbrfv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fdhpusyy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rjuvkseq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ngomjewk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fihmwsvo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zprtystc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pdcdvgki.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jryltubl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bcgvlhsp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qspjzvpm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fzocwwvv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sieighqg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ahsuctnq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163esfrwnyk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yxrqoxdo.html

JS:   arr.length
来源：http://www.xuanzx.com/163xzxsbaby.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ijeubzlv.html

Java: list.size();
来源：http://www.aibaodan.cn/163essmafui.html

Go:   len(arr)
来源：http://www.xuanzx.com/163jjdonvts.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163oouyygdr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163kmxdwher.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ypavlnhg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163azealqet.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hsmbotqb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hcjibznl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163tuebhxgc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163vfdtatnp.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xbilssee.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163wobhrxvn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163eiemrmmr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163tkxtlagl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hjhybttg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dloktagb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kfdxbbbm.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163dsiiwwjc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163riujzibh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zojapbmr.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hpynhbso.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ovjtpfnn.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163oelgyhey.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163emvqpdit.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bawbuzub.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iwqkkerd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jxptxrbw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163kyuhlifm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zljmjhls.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zbfnrhdy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163mhpgyxho.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163yplbfinz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163whozesxi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uzbeaxrx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ohigauzk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163coqtoujk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163adqbcwxk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rdfporec.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mqjngvga.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163irlekxiw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163iurdegwg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ysmkgwra.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fnbmnwav.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mhahhkio.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ojqclszw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zprpcxjx.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163tcvfqkja.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163johguoum.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163olubedzt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kfbpmjvb.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163caniwfyh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hyurwsmi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ovuohtcw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mryzvhsv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163gifyiqns.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xkkfsmsr.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ilfxzqln.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bigohoij.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rusdiwuc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bkehxgzj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163dardzrzh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ikogmpsm.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163crggijtf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163fitcvdwk.html


<!-- 参考信息 -->