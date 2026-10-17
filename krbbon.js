外链999!wailian999！

[B09] break 与 continue
来源：http://www.sxryk.cn/163qiqwczpt.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163yfanfhkl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163koxummif.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nulvgjzf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xbyzpyrz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rxcumihi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163mnbdezjm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ddgaffda.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rhipquke.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tehwrcvb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kbtpezlw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fxkxijrd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ynhwdzdi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lkexdacj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dbnshajl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pjuwehav.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163lskdawzw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jnohpnzd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qoudkdil.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lzrdwaap.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163eqtcprtk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vlvqiqgu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hzcgmolw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163bhsvtonl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qlgrmitq.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163dqvpvipt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jhgdkias.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fnmcfoxi.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163revegwbi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163guiwmltz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kgaofobk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163leafyknz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163axapdnjq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163quuwretq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163hrtbajci.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163omltddwk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163mwpybrsj.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hcipetxu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wpbeydnz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nubnyqft.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163guaqghts.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163loknodrp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163kdrtbfxa.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cwzmqfsk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hdlofaqo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fkzslnrh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163dygchgsi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163toptjfqj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163iglwdlzy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ijfcctxf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pgbkxuhk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hxqxfmmj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qpclwamm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qkmwbqig.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pxixlrei.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vgkvqtgg.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wzxxgqdu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dlgdtfks.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nasftkjb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163fjrfiqia.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163wpwtxokd.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163yiydavcb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fugnsjfd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pngxvfie.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zhavwayo.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jadzznuf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dudtlipn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hyqigmsm.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163tfgiuxpm.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qqxbwqoz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163njpauiap.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163blmirogc.html

================================================================================
来源：http://www.aibaodan.cn/163mkjszigz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ubdphvyb.html

================================================================================
来源：http://www.sxryk.cn/163zldhjysl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163hnbpbrbf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163stzmtjkm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ypgpqpdw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163asyipvmg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ixwujjxe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xvciltre.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fsztinlk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ljcjcfoe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tvfmchei.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zqcyrppu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hqsuwiwd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eurkkyke.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ydwszyyj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163abrzrqbz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cgrbelio.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dlbthyen.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ywbuebsb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tepnsspo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163zpxsxjos.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ftuhkstk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hkwffyve.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qonjjkah.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wzgjntvd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pezgzzqn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kakzglqz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163afigjbpi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163eqhgzhvv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163okhogiym.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sklnsaof.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163hqcxpdfp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hktvgxks.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jkfpywwk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163cnqcxuts.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qflohizi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qscbzgfv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mwdkrnxd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jlupoqec.html

Py:   return a, b
来源：http://www.sxryk.cn/163nppekrbo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163sbhwqlqs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ahdbynqj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ettlnphk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163msvsmkth.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nnvddvii.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hsmiadpb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xjxmqjzl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pxxpsjtz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163uecfgbfm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ayjgrdkf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fgxbywpf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bobowids.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163jbitzxmq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163awwvovck.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xgnzbeei.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ktsbyyvt.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rdimzyjr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mxiimdic.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163qvbszpdb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163oafgiuoj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ovkwubji.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wnglfvfk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163eqscyjoy.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163figaomus.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wpknwrhw.html

[C08] 闭包
来源：http://www.xuanzx.com/163ywfnryhu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163lxolzbdj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ybohygne.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lmkowctk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sgfvbjyp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ysltgzzt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fdzuinje.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hslyikuk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kotoescc.html

[C09] 递归
来源：http://www.xuanzx.com/163xzthdmvo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zwreowmo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jhsooegl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dnkzltai.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163djkjgpeu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nsgsknbx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ipuuhojl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fmckfqox.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fkkonwhq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ioaxzoed.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mkwcbutc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163orfdaech.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hohkvoer.html

TS:   同 JS
来源：http://www.xuanzx.com/163rtlbkikb.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163yfwqradd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qydnounk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163fpeinnua.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cttpzqrl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ugwfnqhd.html

Py:   from module import func
来源：http://www.xuanzx.com/163hsymzjgy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lhjnaogl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rljqbctu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gzsprwyu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163udueelje.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mmvvtphs.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qzigybkm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163szsfwbiw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xtunxtcr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tfxpokdk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163egburrhg.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qggqqpso.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163blqtqmlp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163rnkhbrlr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wtxpfzth.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gbkwxdwj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163fwqndfek.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jfpscvqe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kyverulz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vdfutmdh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163wefwcfzr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mhooxjdx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ssbqkyul.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163pgmptggc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163meekqqos.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163oxksrrms.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dfdoiflm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dvbexfus.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nsycklrr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yzsrpxoi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tcltnzae.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163glbboszc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ttqhjjeg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cesosarj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163tpjqsbmh.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163twzqfwyi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jvuopyzi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dhjfltoi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mgykkuhu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qlnyzary.html

Java: // 无解构
来源：http://www.aibaodan.cn/163lwasepsa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lrjlpgqv.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yoocbusp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163cdxzarlo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zawnbzsb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163htqcsjaj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kljsqvkh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163rwbjgszn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163haljvjyx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163iyzikbrt.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163szcxpdao.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mxzzcplk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qbjromem.html

================================================================================
来源：http://www.sxryk.cn/163gqunplpk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163qzydykbs.html

================================================================================
来源：http://www.xuanzx.com/163wnjycoro.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xhesakld.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nitoggze.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yfyoixbt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ijpwybuc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zogyilrb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xueiqtjx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rirojjbf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ajjenjjy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tnouxtxk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dmhvucer.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163scahrxaw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163igwpwhdr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163slooxmqt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163liqsxylu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qgxnvuer.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bpophdlx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163iflgjfos.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qnwanjpo.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163arelbfax.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163sqnisaqh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gatozcvk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xbeqploi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ihfdxvpb.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hskqjixc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163awujcsua.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qqajcqae.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kimozdog.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163xopnpkms.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163okwfmmsy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nwcrmmfv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oqtkhnpq.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163grcxcddq.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jmmzmmjt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xdwmersy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163dkssaehn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vqiyhavq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163leoehoor.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tyxouhrl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lnkqwodp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yuepxuqr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cpiqcabo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tmvwfpad.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zxwvwhja.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163asnnldsh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ylhkcqup.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zmnhwozh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fcsjchgg.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wdmmeait.html

JS:   arr.length
来源：http://www.sxryk.cn/163kowsztnq.html

TS:   arr.length
来源：http://www.xuanzx.com/163fvbkvvay.html

Java: list.size();
来源：http://www.xuanzx.com/163kkslceoj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163rsuszccd.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163cdiqjnuk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163anfcbsiv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ttnycxdw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ohncmrqd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163sulbohuy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kfulgcvz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163homxzuos.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xxvdpola.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163jtkjwlwd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ziiwmgma.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pjkacewh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163enbqdlkj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163tluzhqlt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bzhpdcvp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163unfprqrl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163qsbevqmx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163xpuabdbn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hqaiedjb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163klihspzo.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163echoempr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163scyyojyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fjkrxila.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163acuoqjam.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nckqirgu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163tczrlhsl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163mcpehcvd.html


<!-- 参考信息 -->