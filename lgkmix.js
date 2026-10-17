外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163blsormxr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163afspuzfi.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rbevgftk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eiqtpzca.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bcukmvcj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163srubcqya.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163bxueplua.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163nivqfzpi.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nyrijedi.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rdjragkz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pvnmkmvr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163etbaamri.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mzxqifnt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oimwvfvj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fygykgyf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163fzrvzrze.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ptzbsgzo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vlkdkbog.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lzvzjiqx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163pphdqunu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nepaudji.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yfkbshcc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163awvwuull.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yxkkwizj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pbwnywsd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wxsomqvj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163vuidozhz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163lochurdi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163zsfbanra.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163fpsxrasg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ybusmwlg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ckaiqyyo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163oyyzzete.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kxptilip.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yembpife.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hohegaer.html

================================================================================
来源：http://www.sxryk.cn/163bxussmph.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mpishejx.html

================================================================================
来源：http://www.xuanzx.com/163mldvfsdt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163dprowune.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163opeyfauj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mznriuoi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163sffvbwuc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bxglickq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hkhrmsxs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163riallexw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qlvtttba.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xfrgtlay.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mvyndabp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tcqxspoh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vlksvzca.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163vioxrybb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163vcnfuetb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163njmhejqt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163kqafcvtw.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qkjhekhe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vbigbdxo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bjstpspi.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pldhwibk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vfkdpnia.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gxmztdqy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nwpxhulu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163epomdouy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qqdpendf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ahvqchqd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163wvvvcumv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ppnbzurh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bbwqsotp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wvxxsmdr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nwrzorsi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dpkwthju.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ivbhnbse.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rfkpwicu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dqabygte.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xuzdoaix.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fobslzdd.html

Py:   return a, b
来源：http://www.xuanzx.com/163rwfhnomu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wayiltfz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163msekdyrh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163yyeadldc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hgfqbicc.html

Go:   return a, b
来源：http://www.xuanzx.com/163evrozwgl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yzrwykmi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163oezcwslm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ohgggjyg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163eqhoawpz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tpoxtprq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vcayguja.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163albdhrij.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kqozdiro.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xkqbensj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163sgpyrxwv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163epystjot.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vohnwzxq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163czvmlgis.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hzzdmamy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jqubuetm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mhtbezxs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dljzoqvl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163rppvpevq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kktgxbvx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mdcoltsc.html

[C08] 闭包
来源：http://www.xuanzx.com/163lggwouuo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yraxbmeu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tjaxjgso.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163syvrkidw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163elfzdctx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dfbkcpgm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163icrrpija.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qblknfxn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163boqbptva.html

[C09] 递归
来源：http://www.sxryk.cn/163jvxizyfi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mzmclxvj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xtjjiyko.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163zwgnhyyk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aqiqkjta.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163oztokexd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163kcmwyvjj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rkdioqro.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163knveisri.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163dqeskkcd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163eqbhybnf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163poffiphs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163idcaceaa.html

TS:   同 JS
来源：http://www.xuanzx.com/163idncuvip.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163jqjucthn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gcqhclza.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mkpcqmxw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163eendotdq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vrxbbukv.html

Py:   from module import func
来源：http://www.xuanzx.com/163bwpusnhv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vnhjlqtt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163svbteucj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wgmnyxpc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163barqbkbl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kndrpios.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xvkemeqb.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qgtfmkcb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qlzhjrww.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rrvjyoyz.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163eqyownhc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wgbumqzl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163edzdxzyo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163yxpifzfa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163otpucova.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ggijdvli.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163htwqdnjm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ulqorsbg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xakfqowt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163bwecnjzw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163tshddodb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hhyzzpda.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bbptfdfq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163drtwpspm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ihvrwyrt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dlivdyrc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jsaoxpfz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163smbbxpsq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jvorfpub.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fjssyqkq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kukpdwxa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pmesnwie.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163levjtrxz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163zeyykovs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vwrtttqe.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vknxvtgk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yraikxfj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qyidwiyo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163izykuwih.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163oyuqeuxk.html

Java: // 无解构
来源：http://www.xuanzx.com/163gkrkopgg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nyjdtjgz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xpazyfqi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163gqcqotyo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gtiugqmh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pexjhsve.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163veaeclqf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163clayteka.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163drwcfhkr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uhbkmapc.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mxjdottp.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fkoneggi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163byrnbkwc.html

================================================================================
来源：http://www.sxryk.cn/163rdekngks.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163iszgjzwz.html

================================================================================
来源：http://www.xuanzx.com/163gdfgziov.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dnmothor.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ggvxkgkn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163niimczmm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ghjmbknp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yfxkegrs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kvdmwhtx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ckabbtqd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oyggufkf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163uiewiuaq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hpsdnvka.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fmvczngj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ocizaode.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zabzdkur.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bhjxqnst.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ehswvoun.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jpnrbclv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wrwdjqnq.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tuzcflpy.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pxchclkv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163iufygeid.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163otwwbacv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ieeeerhx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jatvhmkg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hrqgbjsa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jgopimjm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nfvhppml.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yyfwwcxl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qqymrqdm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163tdohwuvw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163didoteyx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fjypqfky.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vituzvzu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163tyblhiuv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163itoefsxc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xaygdluw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163redrgrqj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cnmmiwbo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wyqmptpo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163aqnuzpji.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163atzqukcl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wuowsjqo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163seyujklr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xgzvxsbw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163slkgxgoh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bnqqomsy.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163suwfpzhp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163scmxcmjk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pynkddcs.html

JS:   arr.length
来源：http://www.xuanzx.com/163kejtidiy.html

TS:   arr.length
来源：http://www.xuanzx.com/163jkxacwca.html

Java: list.size();
来源：http://www.aibaodan.cn/163mmsikjfd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bvaseboo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nqizyikx.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zgbsxpen.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tnexezel.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ctmewwyc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163twxkrkpy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jkjtxxts.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jhqlhldf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nlsgdixb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cicwztxt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163rzvcyyko.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dixnlijw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163agiwcrel.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163krnwafbe.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163eyincytg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163itbduhrv.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lhwkvygu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tuasmcvp.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tkxoeuyd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ovchlbbr.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fvmfjrag.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ispcyths.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dydfjlog.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xjzbklxs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bhgujxcx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vitxhace.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pdkbjdch.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163uufamjti.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163bozmllyi.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fotmdlbd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vxhejkjm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tuiqusyg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cbdnsvrb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163gnqoufkz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mjhmobga.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163swihgtad.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jkchbqvg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mowvttkr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163msetodhk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mdvvupdc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ghvikupj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163hpxoyjcy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vbtnnjuk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nzcjekvj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ukwucjnv.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163cmrnbqmr.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163tqhzlbdo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163mkyzahku.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pnjztkbb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163owzmnrvf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163oinvhmuy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ljuzehrr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163izcexkdy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163snvzeipw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hhnluaid.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163cxtbpvys.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163oshognkk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163siteycnf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ogknuish.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163lqhnbedh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kqynmvtu.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163blvegtco.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163kkqtxcvm.html


<!-- 参考信息 -->