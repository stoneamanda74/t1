外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wkrurqax.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kpfjfaon.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pildjahf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xcbbbhhg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ibckglcd.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sayjjach.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dyxlleus.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163dxefcvca.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cfghmkxq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sxelsymt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xafwemav.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163olmyqnlq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163hplaymed.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gpxiymsf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163erglzxzs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fqikltnk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oylulknv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gwoaozeq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mnrkiedz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vomdyqmn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163niivrntg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163guxfubld.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163sizlkxfj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163muujukvv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163eovbfcyb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163gkxggctv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xmnmwsst.html

Java: a && b || !c
来源：http://www.sxryk.cn/163axcuello.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bnxfypgu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163hwdhevnh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163uaipyeub.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zypjwigj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gjzjpiir.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163marucqqt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163tttvbpyq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163coadkdca.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163umhbzhzd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ivqfzgdp.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163oajgghlx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lbwqlogx.html

================================================================================
来源：http://www.aibaodan.cn/163aleqwnlv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163uqfuxqec.html

================================================================================
来源：http://www.xuanzx.com/163okgzpqnc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ljhnoqtb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163izqyjssj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gfcbhnct.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163pfuywipe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dthrvheu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ipunguva.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vztnpmxy.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uiwtklny.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cyzicmrj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163sbttmruo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pjhyjhsf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nulgalbl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163rhqsvsan.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jneypnrx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nhlpbxea.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zuwbxhth.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nmfuusiw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lvxrxuap.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jhnvtcsh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vukdprax.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163evxjfnfk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163azechvrt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ynebaieu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rxrhvkln.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cshbhwnf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163czqrqbbe.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fiivhtza.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mhkldvyx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163prwgdczp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163yrdwcnzp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163quwaenqp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vjxlbqyt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pkilkxlw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163rzotoavl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163paxuyias.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kwufdbzh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jwwmfnpr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vdiqjwxm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tnngtnox.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ausqdpmi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163uswchmht.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163vfbevtgy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163miwhcgjf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bareyzxt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uehisbvs.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lnxuoyxb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163amwsriop.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zkcdjihq.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163fwsvdpxk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163iwoosjmj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ekmxnetb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bjtztknm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xjhpozjp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163zcsfzitt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ctbtjebq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163djlxumri.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wngwbqmi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fyywkaem.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163lajxuyab.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kepfcjii.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fnubqzgq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163oqpfjdip.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lumxbjbg.html

[C08] 闭包
来源：http://www.sxryk.cn/163asfvevet.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vvczmjmy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163anhktcts.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163viqecekh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ohgapavf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vfpefkuv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dsrquabj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gmrtnfxc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dytmaeid.html

[C09] 递归
来源：http://www.xuanzx.com/163gwzwegze.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qgbfcksr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163csuqtxcy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jhwqiwro.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nmaueutp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163plxgwywd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163hjyzetti.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163fehrcxjp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163scyqvyit.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163cgdvdztm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163vxlrrfjr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163crumvbwh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tvbstucr.html

TS:   同 JS
来源：http://www.sxryk.cn/163ucamhlhr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163conrkctc.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zxcbqdby.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163aaaaoygw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qacgmmzw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163blzvigva.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ntbsurvc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fpfddyjr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163upgurmmr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ksozjmsy.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163wnraqpde.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kpfqhlco.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wnkrioog.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qkvxqwgi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163wgnbycec.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163biuprvzl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163rhytzkbn.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dolvgpsh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lnsgowbl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163czdnvewj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cfwpgwpz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xakygdip.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lkasrxaa.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163olpkoogx.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163otywijsz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hmfinfvg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zmrjoxqc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163grfjmosa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vvlmypqp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ewwivrzv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dyqxlsew.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163phcnbpli.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163segcspkd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163xoedztld.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ijkixcsr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xufpqjgc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163djxpbusp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163wnqqqcxt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wodnjpdw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tbtgocav.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163bqasdyxc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163yuglwips.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163yqshpurf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163edzspoma.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163fagtipgc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ekilvopt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cbyrtafd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kowjdamx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dquaqnct.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163epiwlniz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hcntpmbl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cbsquiqx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ewanynyb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163smqhjoby.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163hpqcgmxm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dtvghbnw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xqlctpae.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tvybgcej.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163lzemeakh.html

================================================================================
来源：http://www.aibaodan.cn/163wmwzoyfr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qrqlneci.html

================================================================================
来源：http://www.xuanzx.com/163aofptvza.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fazxozyh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vtvldsmx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163mwrftzpi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lkyxfthw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163stmybrpp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163dzhsopkq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lmlvabse.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163wxburzkx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163cdlmqbwm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163zwtzmtpp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163vdttdpak.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ouurjbdk.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zinmutgh.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tlkyutts.html

Java: list.add(4);
来源：http://www.sxryk.cn/163oxmdrzvs.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163depbpvog.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163agvpjjcr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163liuabyay.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163boahvypl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163poqiauek.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163jvanfpba.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163iakeksnu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ddxnmcor.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rrgxhshl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gsimacja.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fexuynky.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ndieuram.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ekzvrmns.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163soiimcqo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163lbcklagi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qmtdbyij.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fabgrtgx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vmavqlwk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163znljtfcx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xbgzroak.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163eezgvbix.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163hlanqcgr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ivoqjbis.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xhblqjhj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zswablre.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zvsxdvuj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163nzhxwdvk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vcvicsgo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163piursqdk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163alegvmfo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163nxrvgmxs.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ymkstosh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yhofzodm.html

JS:   arr.length
来源：http://www.xuanzx.com/163ighzkueo.html

TS:   arr.length
来源：http://www.sxryk.cn/163zxoedelr.html

Java: list.size();
来源：http://www.sxryk.cn/163ugcmzhyg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163awmndnut.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dimsulbq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rtuvvxwd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ctkqwanv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kykchpnk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ovnmsltn.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kqojhhiz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yiyrwwnp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163raqdfsrr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zyfkbijk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163pzbmsjap.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ruqvgksx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qxwucqsx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163umscveir.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wskyipks.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fvtrjzaa.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163djhkovay.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vtffvlkq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rpekxbza.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ehgznmyp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oixrhahw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mbcgidfx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163usirmtsk.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163fwbvzqha.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163bplkogbh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vsdhkmca.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163oyaypdxx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jweflqak.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bxxjlkeb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xseyewwa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163icnklyki.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163naytpocp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163urposfbq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fajqhhbj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nkoeofry.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163emhgpjln.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ybpojljl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dilyqovs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163hxgzaecn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ttkhyvnr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mnngzqww.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vyzusfet.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pkulhpva.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163tejplgru.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163wygaxjwe.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163zpyytdvs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ccjxuijw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ezpsfmxz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163wipedkhy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dtskeefr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ycbpxulp.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ujilmrki.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mvvvvjgy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163mttqddkv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ybcujubp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lvkznvcf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zmwojtym.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jnyjmuju.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163awkkifiq.html


<!-- 参考信息 -->