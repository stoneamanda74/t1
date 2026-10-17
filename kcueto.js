外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mzuucifk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163wjjbxdtz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163aqrqlldu.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163kdyzrcif.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wmkwohrv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xvtfkuzv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kkwuwhnp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mifqkylg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bgadtfbb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163usrsdxpi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ojhgdzkr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hvwqqdpf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wpgtqnye.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tncyxetp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163bcwjdjbu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gglyicbu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ezltqhda.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nlaoscxa.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163qgxiaehb.html

Java: a && b || !c
来源：http://www.sxryk.cn/163oorufwyc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ihqnsefh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ryqqrgwt.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fiqmxepm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jhlcfaow.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jtaqhwpt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163jomyuqja.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163gnusgxtp.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163crkvigto.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163okjsvfhe.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uejairvr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dixuoami.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163slesdxeg.html

================================================================================
来源：http://www.aibaodan.cn/163zauewuud.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kthkykdp.html

================================================================================
来源：http://www.sxryk.cn/163ayupbhcd.html

[C01] 定义函数
来源：http://www.sxryk.cn/163twmjitxb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163eceghjpg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xfxsxcbk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ykyocfav.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ueuudhyw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zozbbnmq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163guuudrpj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163bcnogrzz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xziewlbs.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xgmzxqok.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dublligy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fueodfcm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163acawfzzj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163viekabme.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jfozhxrq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sbfbkjck.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ksxflzao.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ikxoydix.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ecspiaju.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uhbqeqhf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xnojrlql.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163glbxbepo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qeaiuadc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cgvsrnqj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nzibpxba.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xbnjmucg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nultogsz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kjzbcred.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ouxpgwvp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hmvcswwd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hpvoebxd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163uvuayhjd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lhayxdix.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zyyuadef.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dugjytvv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eqaghkic.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jxlijoit.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gfolxlnl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nnvuivtl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xwsdgmvm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bmdvcqxk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gjglanhw.html

Go:   return a, b
来源：http://www.xuanzx.com/163izpjtqbc.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jyeifzkv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163muwqecxi.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163idybrlam.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fklrwrgc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uoiwpely.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zjrimuuw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163tbouhjla.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pwiixxwl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jumtaiux.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dvwgaunb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163nmlrotbv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ikdhoysb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fkkfkhif.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163vbrdtlna.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163bkqalrcg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163fdmatggo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ektawace.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163wblimwmg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tsjfzibs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163davjajzm.html

[C08] 闭包
来源：http://www.sxryk.cn/163herikftf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163pzlyvkkp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cxfoxswy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cdbsvkxb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjxujygf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fiisazdi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bzummkhz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tapiqejm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qdzvpnek.html

[C09] 递归
来源：http://www.aibaodan.cn/163clypcpzv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mgjvbwuv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bapyzqlf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163inifvvcz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lienfntm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kgkeonjx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163heijmqqm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zlzidvgk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163jkiatrwz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wdctyyqz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163fqjjrigi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lbmttkud.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163jtebvyqr.html

TS:   同 JS
来源：http://www.sxryk.cn/163utindilj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vdovcqyo.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fdogzmyi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rqgnufqn.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163huptzrfu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qyhnpmuk.html

Py:   from module import func
来源：http://www.xuanzx.com/163yllykmkw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163pelpzsti.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163kkgczava.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ttaqmufc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bgcmaxvw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qaghsaid.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163umskeaxx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bwlnrdtl.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uvpcnfyj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163osikksud.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jyxlhscc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zxacphgq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163clcjeeao.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mxcpwrrr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163iggvswip.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tgjwwfmu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jfwutafg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kqtamwzu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163echkwesq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ruzagkgs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163pqfwqbhn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bplfvyyf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wbabllzh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163fvqmxanr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kvdexxxv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163nxiccwte.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163udrzzcds.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tfqndmfw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163muiutaza.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mnnbbbku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ybhswjzo.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163gjhpudqj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163cwfloesd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163atlkltue.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hyxazuvh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dacbdbvg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tqtcmtmh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163qafyhfzm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163emtvtexq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163mhixsvpz.html

Java: // 无解构
来源：http://www.xuanzx.com/163sdekdpbr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163iivlcphh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mzvmuxun.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nyxuvhml.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163roltpfvs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zozqbedi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163yqvajozs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wkjluhbv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ytwuszak.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163duvzdpps.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vdsaswbf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163trvwarbj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163acbhhuzz.html

================================================================================
来源：http://www.aibaodan.cn/163ocnratmh.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ghuugsxg.html

================================================================================
来源：http://www.xuanzx.com/163jevvjbzs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163csbuittx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yughwrng.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163yyuxlmbi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163upfvutqw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zknssnxk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qkcanjrv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vlriuwub.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163izqxkbch.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nnanvaaj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mrpsdbgo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hpseoobr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163cxmjrryl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kkotygal.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ikzcsnov.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wagbfmlt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rhxbiavq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163bvonaelq.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163minsgtav.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jlrrcrgi.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163cublsqzh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163hdvwtloo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gmpeowxh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jadgwjdi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163txdctsnb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163vtovfrvv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vddajcez.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qiblyroo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ihrvgxmq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163extqhihe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zfguwbzu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163etnvsrew.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163thscufvb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163awbbwfrj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163otqhefqj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163uarcrumb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wxvbvxmc.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jkdegomj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qgflwprp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nbvbdkux.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qeupjzpc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163yuuzkidk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mkzwuzbx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ksdcwhyc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163isebqbpm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bucbjiuw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ukqkmqsb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163amqxugmq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wrhrlzif.html

JS:   arr.length
来源：http://www.sxryk.cn/163wxfdexvx.html

TS:   arr.length
来源：http://www.sxryk.cn/163lzhpmgnz.html

Java: list.size();
来源：http://www.sxryk.cn/163jfgihjvd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yywvckzy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163inwisknv.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zkzfsqwj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ojawasea.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pnizevmh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163uqvvqnwu.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ebxyrowg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mqnpdxiw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lrgjybtt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zwhmmwna.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163arjaawyj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zmjeayjw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163supqcbsu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lemsrblb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163crthvozl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fqeinonp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jwyzvcfe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bmccadbf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lvrixxil.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ztarppis.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163gbgypfve.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hduccwbl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163esuqrtvj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163xzisnyxp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163slpglvgp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wgbxwjaf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163flmhswzb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163aaidgalm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163smkbgfpy.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jcbxvajn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163syqmavwo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163fpsocrdp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lqfjetca.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163emetppzh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ppgnbstq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bbvfghwp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hmusrbns.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163uxwdldmy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163asmorrmf.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hkuklztp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ljkbmybo.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zgzoelhg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ikqrfedx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163pfcmihms.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vmkbudlc.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163joatpmjv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ggweqnui.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mptjnqrf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163txkigwrx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mfnoghmp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163nucnjomm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wyfocnii.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xvekscmc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fjpszugw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163lgsafhoj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163uvusvghu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163gsdwsygj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163uejagttk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uwodhnln.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bjttdjmg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ijxidphr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163cvoslqqn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xneftzkm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rhhmqetn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hzemmvph.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163heoqzyrw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163aorcvpuw.html


<!-- 参考信息 -->