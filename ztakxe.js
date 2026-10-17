外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ecouyveh.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qokrgifq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163zdvbkrtp.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qaeqpvoi.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163gqjubyeo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163yhgtzmmk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163okvgajaf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xvauemkr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eoejhwzp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nibnafjk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yesxzefu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163strqopoa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hmocaimt.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163zilvmtou.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163pmnjbffz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rtzcxfag.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163feavnwcy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rwnqgnwt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lrpgdydu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163fzpuuumj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163scorzbhn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wftixetk.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163oshvjckf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tqipyjig.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163axqidvvf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gqglxlyr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gbjbsure.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163qnxlrqwv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zhlxznvz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mtjfahum.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163lhhctvtg.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163elbqpwpy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163dwvxvtum.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dvkumdqm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wcblgpbe.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uphcgwgd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ibeetnrm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uvurasxh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163aqaytoyl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pefdnlxd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163inoksqtu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zpkkxqre.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jrequeii.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wmuyyrwn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qilodcsl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163sulpihio.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ugygjinj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dldqhtgn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xdwcnhqo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163zjdeskdf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gktonrgy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kchvlvha.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163asnlbpbe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163gyqhlhxm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lyholdid.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wrixcclb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jxwkimxq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163deumhlgq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gdhejxhx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bfrrmtau.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vsydoxdv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163vtfqwkeq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163kbllpfkw.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jyjgsknh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163iavkqbex.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163nohsdscl.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tentkwbz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tfrghhuj.html

Py:   if not data: return
来源：http://www.xuanzx.com/163wxmkmrod.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163npgzqdfk.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vlvdzsgy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163qczzcint.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cubcxtgu.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163jkimifur.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uhyxdcic.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163okrvdxrw.html

================================================================================
来源：http://www.sxryk.cn/163lksmyjho.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tkofocii.html

================================================================================
来源：http://www.aibaodan.cn/163cfoiwmwq.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wdmnwket.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zdmvdlky.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zkoyejxe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163skynrqvs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163idyppyvr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163avlymdgc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163bqmzxtuf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163edbrdwym.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hiyrfsct.html

[C02] 默认参数
来源：http://www.xuanzx.com/163uymyewmi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rkwxejda.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fgmipssc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wjhkusma.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qcrawvhp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163slvfionf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163hnxaipvq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bsdhgtbb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163qkugamxc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uomhebqc.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xoafipqd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ijseepkd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fuipdxwc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bknypakn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vjvkhehj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wtkemvcv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ekvnphcr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163xcimwshk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163yighwpau.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ovtqgpqb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xnemvdgt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mtobhrsk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163eyncypnx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rvldfhrf.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163nbkmlbcv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163suobtumj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163saogjvbd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163frpnboky.html

Py:   return a, b
来源：http://www.xuanzx.com/163qmkqvwfg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163lzkjzxwe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163swiipyex.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ankajgdd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jvjsnpwe.html

Go:   return a, b
来源：http://www.xuanzx.com/163ynojcfkw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bkzfgkkm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163zxnttexo.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aaaolnrw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jjkbqoyl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163qbsruisa.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163evzmfuit.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ipuqcnsh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lwizovvi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qqdostyl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163umidxfsp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wpnrnntl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pycaenyp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zilchdxx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163okvzjnxg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163tvzrhgai.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cgqktzjh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qadksyfi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163eeongrxa.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163mjmnpwri.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163cbosmlqv.html

[C08] 闭包
来源：http://www.sxryk.cn/163gmbblixn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qjejhxib.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mugnrdqw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rgbgxedm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163llmdnwct.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hgdwfban.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mljiccmi.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163tjwerxya.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163aqrjblrg.html

[C09] 递归
来源：http://www.xuanzx.com/163mhuxxkxh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163seahcsye.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dalhazyn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bbkfdkhd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gzdzntsx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163pyrkensi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ojvfsfhw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fnydxojs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nytivtvz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xqlqdpil.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163iqlpnytf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163oaljozgo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xbwvkpfa.html

TS:   同 JS
来源：http://www.xuanzx.com/163surkbwot.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cweeride.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yvdxpxag.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qaetqvky.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qtownvce.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ycwpdumm.html

Py:   from module import func
来源：http://www.sxryk.cn/163djottyis.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zojoghut.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zkimrvas.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163sypsvjzh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dnbgdpup.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rdibotym.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163qsnizzip.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fkwubnlg.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pnjwpmlz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163alrznkvw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bertpkgh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hichnfnx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163uvsoqxcn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qalandox.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163aaklnlos.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nitjiqqt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wdloejkw.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uqblvgcj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vtsbjhpg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kdrikpmv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qvuzbuol.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163inptzowt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pvnterhv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163irxrxwna.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163twxiqoip.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nclpxvhb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jfwjefkw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yzndvufn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gwrbrmuo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163enzoxbda.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ufjgfckg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163xzpckwhu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163mwmjbfwn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ioaypimj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gvabiplk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mckwqsxw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cibnqrvk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jvlmxhjm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163wsivukdg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rvcnxjep.html

Java: // 无解构
来源：http://www.xuanzx.com/163wgkgvksq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163inrobehg.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163otshfkxu.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wjqyytab.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163njvdkhpa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163jmcmkfua.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hgwaaafs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hansysyg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kwdhffqv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163fzxqnwsr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163egpdwglx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tirjqbpj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jwfijnol.html

================================================================================
来源：http://www.aibaodan.cn/163ncwaugrl.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kdtkjakn.html

================================================================================
来源：http://www.sxryk.cn/163lhbwoczs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163eqfxtfwk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163swzwdcyz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jdbyxjzy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rexhault.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163usailcpu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hcyyanup.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163sbckiugl.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ayxmeqvz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fmncbfkq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163vwkflndz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rzhqlzqg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163otsxvwrr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kjgktjgw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wgjtetgi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yspubmzf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163idkqadct.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xmevcwax.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163iyoehfbu.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ohlhoxig.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xfdlbmid.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163quyeandm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163hjkylaje.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rbzfhtvq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yeocfeju.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163odlnrtjd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ljepyzwd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163qaxbxusy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163oqatwfaj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163khelnqht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wiuguzxp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bblgxvyu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mpkbtqzo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xhagktld.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163guhxkpwh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163hrsdvjlr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wsftlezk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gancmcnp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zlqurslw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wsypjtec.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hbavasad.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rwgwmwuq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163byhimlyl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dpvjfauv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bzigfuxq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163adqcqbvn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ddanaelm.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jyaauyde.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yrjtvbgq.html

JS:   arr.length
来源：http://www.xuanzx.com/163bxzwmrur.html

TS:   arr.length
来源：http://www.sxryk.cn/163qrkxffhj.html

Java: list.size();
来源：http://www.sxryk.cn/163txrzbyim.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cwzkxhna.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xposflua.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ykxbdija.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ivqggoup.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163idsacigv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ohwwgkrq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tbpxronk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mrqplucn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lffyssig.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163buxpxvww.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163splbcskt.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163figkdblh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ystshbos.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163dqhittnj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163juowvbpu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163eafkmjtm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163mbakuoho.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163crlcwjlq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rzeeegdz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163fjkkraez.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163cfmwgbvc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163rvszhkqn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zvxnhmqj.html


<!-- 参考信息 -->