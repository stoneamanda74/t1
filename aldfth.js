外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dkqshfli.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163yuzenzzl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ietxbvbm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rnldvaca.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163qwecudqh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163jwjacxqw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rbpkkbjq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163edybujdb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163pnrsajnv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163dzeslssc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fosqkprl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vzpzougz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163rpbkylua.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bnpkpfeb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vjgfmujm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163pbpboawk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163rbfaoxzb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163epcftabm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hzccgnsc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jsweutel.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ydfhwtat.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qtbgwnfm.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ejeniuse.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tkiuahsr.html

================================================================================
来源：http://www.sxryk.cn/163lxvuwlxm.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nwjbfggd.html

================================================================================
来源：http://www.aibaodan.cn/163ohwbjjnh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ohsdwbne.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vvyttdwl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wgibgske.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tdeigoud.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kcqdojgk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pshqonaz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163udeaveki.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163tvjsxvqg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163grkfmspp.html

[C02] 默认参数
来源：http://www.sxryk.cn/163svbqftji.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163cfozctzx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xkdfofyb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163siswkajp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ogtnvuap.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nmmqgtju.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dnqpahpi.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163qndzovao.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ohmouvxs.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mgqjxnhv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hrvlgzux.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jyfefucb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mxznrdno.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xhgenflb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163azqtpsfi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nokyythp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bfzwbvtx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163csttrwtd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bsabpwot.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163azixbqth.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163plgqnqnh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kkuqwezt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163muwkreml.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lyerwwdj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mpmscbop.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cwknqwbo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163seqjwywy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rvzgobuq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163fpevfsor.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ryjmxqxz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jhiqoqee.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163znnhowwl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163arptpeku.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nhlcitnw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163erzlavhc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ppptctyt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rfvqydud.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163uytusrak.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163cmhrbfls.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ckzyeaat.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nztygwpm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rbqyvxix.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vchomqlv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163jucsottm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163uxncdnqr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ickepkqz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rsfdxelq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zlkjzgnu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ugkmxkpn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163aqrxqwko.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fkkopomm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163fgahtqum.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lgymezko.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kfsvpcff.html

[C08] 闭包
来源：http://www.xuanzx.com/163jxsckszd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163etqvkkvw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163khhysezy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fsqhcyhi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ekzazrqr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ussfdngn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yneqafub.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nkmahxbc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qbgalaiw.html

[C09] 递归
来源：http://www.xuanzx.com/163cikkyrwc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gdagisen.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ngndhray.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163erhddwhj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163umftamqy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nwyueqhj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163koenlwsv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jkpqrqfy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cjnnxnyt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163uedmkoqh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hlgrzhcr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163kmvhmwxv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bchyeaue.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ikgkshik.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163poxnhtmr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163eerwmdcp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163eiishzos.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rscldtsr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ljvhgxql.html

Py:   from module import func
来源：http://www.xuanzx.com/163wntmairm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163vmzbthth.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qfdiumzr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ucertjbe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nosujlvw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163knblxxsi.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163abuarjij.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163anptpode.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163dxcvhbut.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163jnrfqxjg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ivrmkfcp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163eouaxiyj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fyxumbbe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nyfhbaki.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163tsfgwzwj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ozbjtdfr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zdxymbgw.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163obnxzgzo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lblznskk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163egijrhrv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hjukgyze.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163asfktcsa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pvaosqja.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ukarjukr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163tnfoxxrj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163herenrrv.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163agvhsxer.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ebxjnqkd.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fgcfmkls.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163idgakdpn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tnydluyc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vdhkqyvj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163plruzjhm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qrjdahwq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ahujpuvl.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rnzrjfja.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jthuaidd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163uirsgpet.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ktjcldti.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cwviqbmx.html

Java: // 无解构
来源：http://www.sxryk.cn/163hnykudmf.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xzixzhms.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ldgwustx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kyutwdir.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ppfceacf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163youjpcez.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ulknyjhp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nvqvkcxe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163anyqgyuw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gtgtkzfd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uonuzpve.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ylywhudc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xjovlbyu.html

================================================================================
来源：http://www.sxryk.cn/163hkchiyjv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163amtsaxrb.html

================================================================================
来源：http://www.sxryk.cn/163ffbcddpx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dvupbkxt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mjhwmhns.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gssitnyf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163yorsbupn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nlmqhqmg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fzgxdhaq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xzealxhy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163cykumuut.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163lfdznpsj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pgdombdh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ktflrpcc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hzrrkewx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163hbfmmyjc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163sulogehk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rgjilooj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vnvohvtq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163sgitekpu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pkrzgofn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163exrqfvst.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mxuwgucw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mycnoccm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fdwrkcfb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hyqxqodj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ijxikexv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163aksyajti.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zuuozwqc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oqunndtg.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fglaxguw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gwjzwahb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163rkfgjyqq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hdibimwh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qkjrsffo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fqfttlro.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rxqubmxx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163givmscde.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jtkfxrib.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163dzmrncrf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163slhfumue.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lcidbdhm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163evjbdmwm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wxbcyrxd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163fteicbvv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bfitnnhv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nonmbabg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ayfawvay.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bucgheex.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vmplkfpf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163bqafjwbb.html

JS:   arr.length
来源：http://www.sxryk.cn/163odaamceq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163aylvzebx.html

Java: list.size();
来源：http://www.xuanzx.com/163elgdxtct.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lllstikc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163odiivdrk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ajtkhomc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163czlgxifm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gqiylzxg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163cexngqxu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ryawazss.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jxkuopwr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vwqoixdi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kconpwvp.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wmrflzvv.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zqwzacsd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163depwiroz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163mrznlcyp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rutrzzuc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163avhanrtc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163epizeika.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mamhafyp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ymuuobqt.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ejavqapi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ghqpciqe.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163snpeofuz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163pvbwughq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ogjuaefx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zhfeqnwo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tgtscbmj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163uximlifi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qygnjkcf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mxxtblbq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163whmvwybj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ymdadoym.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wokolbpc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wpnxrmlu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163rvmfnntm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dzgijxji.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163gwzuztsp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ulanrsdl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163oodjhrtm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163smymqida.html

[D11] 反转数组
来源：http://www.xuanzx.com/163gnnzreuw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zhxiopha.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163knlnifgc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qysasnkp.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163hkduljpy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163lwghdgcp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ntkzypuq.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163pfivalgj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wxxaitwh.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163obmhkqes.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163cijmjqxw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pcphuzkc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jrrhdehl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rpbuqwxu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fmqlgnlx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iwpryhxe.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tieegzes.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163wlqljtln.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rxbewlyf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jnjkblhr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163fiargccc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nxmgrpit.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163syxzgsxk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163gdvqcvum.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163lkinatie.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163mxflhfyb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163qxsderpz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163eznrcflq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kmdvirqu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yiehwlgb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pjgrsaja.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cdvihpjr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qpkbdjrp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163domkdztn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bxydxwcs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ehpwpldw.html


<!-- 参考信息 -->