外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ebwxhfqo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163daaaagoa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163umokyoip.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163wdykevto.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163tqhpbaqt.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163gvtbviwe.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gvzxbkxz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mkwvdlvl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163emfbcfnm.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sdkeadvw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zrlcusnn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jtccqyad.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eztsaaum.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ebvnzvnl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cnpkishl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163boeitsxk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xliyoqna.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dqfgrzee.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163uwdgskiy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ktlsicih.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xjmkfhow.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pcnmwqkz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hededevk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163zhntikay.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kgdedegc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163poedjwap.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wnbcsgxc.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163inidnxhf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163iosyiner.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yitjgcsa.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163gpcejrdj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163eswkvqmo.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vikxvfcl.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zqmyurgv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163prppxcji.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ozbxunqo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yqcocrcj.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gapeiueg.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bzfryhua.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163meojocbh.html

================================================================================
来源：http://www.xuanzx.com/163pdxshwho.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163llimwqvh.html

================================================================================
来源：http://www.aibaodan.cn/163cfuadptu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tvdlrnlp.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163afaesimy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gwpfmwmc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dazwaawu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yeymyfbx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tnnnqyiu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vfdiwxau.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163zflzxsyi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pqblbbya.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tlyjawqs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163odgmrcld.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163cimcgkeo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163kthmdbjn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xoqibzsu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163giyadfra.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tulwijps.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rbttqbez.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kbfqkpfg.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nmfkqiig.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163vzvelbmo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pitzgpeq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rmpepitg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163egqocuix.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hqocefra.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163isqseqgc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bepbwpmu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163klnubcmc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163dboyuonk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163npmoodpj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163hxxcnkqk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163edqnlssx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rvskmkeq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zkyuppsa.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ifnljrbt.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kgdiqsgi.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hyybwjnv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163yjktinzv.html

Py:   return a, b
来源：http://www.sxryk.cn/163hdcoxsgs.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rwssfjup.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rehcrrew.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nnbzvskd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zxudwjom.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qxlknhok.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dpnspleq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kiniturz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lsawvafv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ypafkodm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163brkvbchf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tofeoetp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mfpjzymc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rbkkyuqe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fzrhqskl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pwywjauy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yddtalnv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jemcvady.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qvbjyodg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zxqgxigu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mnhepewz.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mkwslfyv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163isdnbhkb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163opphovgw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lvpjtheu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ppdlxozb.html

[C08] 闭包
来源：http://www.xuanzx.com/163ctkxmnea.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fwrgyjpy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wmmlpmse.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ecwtebno.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nfxntfne.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fclfaqor.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ljqitabr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163jvoinioz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oyzpcbyz.html

[C09] 递归
来源：http://www.aibaodan.cn/163hdeyjyid.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163kedseutk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mvunuwiz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163spwurjta.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xyhjpvvh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163oiasmuxi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uvpxizqe.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163nokrxwvu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gxbrcdxa.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163fefceqkj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tzvkdach.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wzdmjzsq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163zgnpufna.html

TS:   同 JS
来源：http://www.sxryk.cn/163ltlphwkx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fdctbnvl.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rqprdzql.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qntyxedb.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ykdbcuus.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hoqjrpmf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gvcypxtt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163makhnqoo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163otswqers.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mcqbovlv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dndsztec.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163nsdchije.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163byawtfeh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163alupehwo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163akernwix.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163iadaahip.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163moxxgxvg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xpfxmnzv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163isppxehh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163tirnetju.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rwbwpkha.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mrjhnvga.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163tjudhvcs.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bpipjujs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163qmhgtolh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cnciknbj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dsmapcui.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ilibxggp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163marbiqei.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xswdmigu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pkptcamh.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lzjmmutc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kcpnzeyv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163tmuonmaz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163snftjems.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qesfkcsn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ruvgzwzy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163hymbaizu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vxntncpc.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qztsdzsq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zemlhbkb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163efxblnsg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kkilmcnf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163axwihdjb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163jwvfrzjm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163abaatacy.html

Java: // 无解构
来源：http://www.sxryk.cn/163pljrhqit.html

Go:   // 无解构
来源：http://www.sxryk.cn/163evbstenz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163priuispp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163vznaurfn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163duunxnav.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hvwvwfhb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ptxawtjc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163exvorphg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163pyrzcbhj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jdhrazxt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mihdndgm.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hyzwpetk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kpnwoxcu.html

================================================================================
来源：http://www.xuanzx.com/163nqnkssiz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gqdzghzw.html

================================================================================
来源：http://www.xuanzx.com/163ziybmwxu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vrhkvwzo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wjtwdiid.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dtvytfgp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163wuqeolqq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163fdjcvfrj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163umutxcyp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163eaqbdcca.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163epdofgmx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ugkyajon.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wlznfywp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163sfehzsvw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163aolkwfmi.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163wpwjlwvr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qvfleeqq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hfjkkrti.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nwncanps.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jcpqouut.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gmmszsje.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hrmsnsqy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163kmysxury.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163psgeralu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163qwcfojom.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ipkmmuac.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163smzesqnw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163aaudcwfu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163nwcnlwcf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163wuanrjxz.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vsxbvwpx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163wxhkxlzi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uemjsuri.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qnyutvqj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bxsiwecm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lbkrrorw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163hwqwshuu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163yvabmuor.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ysnswniw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163pildnndr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tvmwkczd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mzgehill.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kfhmiccd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fnhpieky.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163klklnccq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163stjdmeja.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aaupwiwd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ehpxftww.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ahsogrym.html

Py:   len(arr)
来源：http://www.xuanzx.com/163emmxhafq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gtumjelj.html

JS:   arr.length
来源：http://www.aibaodan.cn/163lprsbpok.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mrxzsimc.html

Java: list.size();
来源：http://www.aibaodan.cn/163dvluodrg.html

Go:   len(arr)
来源：http://www.sxryk.cn/163zbykbrqd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163pgemdpid.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ajszzgit.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dbfeypkr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rlkjbvoe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vwjcgxyn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qqztoxcx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zalifxvl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xcckuzxi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mbuhczze.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wylasbkx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zidwdszx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163brseoqrm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ozrfodkz.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qrjrznex.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163oyjseyya.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fxrabkrp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ckygpibl.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jftkwjks.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jyarncbu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ibkcnfes.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fpsiqznd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gielzber.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163goxbtfvh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163gwaylvtb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163omwrttps.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xymqdjke.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nqnymuon.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jieagleq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163cuygwnsz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cyskxwjj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ufctsmhk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bxaatbkk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iancudeu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nkdpqttx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163czppmxfb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163uciqpchl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rslwxctx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mzxgtmmt.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wykwxsoj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vxzrmkil.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tyvujpgr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163kviokzbt.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163somvrwiy.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fmxqrmbw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163advpgaqt.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ptemlvpx.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bqybgruw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xrsqsyot.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163uuqwbjct.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xlwkvddc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cvonvfgn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163oplzazds.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163esjilfqx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163mlgowojz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fhisbtpq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zpujcdvg.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163lxxyasfr.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163exfppuii.html


<!-- 参考信息 -->