外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zdmfuqfp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vozqbrci.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163isefnzut.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163drhzgmad.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fvwukzit.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wialhftx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bfkhtgvn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dcxsevsr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dxqxcuyz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163peaealpg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163oyyfaesi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163vrqtcbbi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nfsepewq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163uiybzrtc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163orzvxtsb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163yickwzyc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163khddttfc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163yzizfqma.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tpfucyqr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163isjbjjub.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cqesxlbl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bifjqths.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163dqomquyk.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ynguoniz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qaydjwez.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163unuhouhk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rwpesvyt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lzsgnyco.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lqrwtsak.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163saqbhnqc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163elvqpcxx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163eukwtwda.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163exnmvdnv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zdlywffh.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ghjtkiok.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zkrlckod.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bhledinj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163euzwbipt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ezzrpfwo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ifnadzwr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ddkgpfuj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163bbdbisjf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cjimqnvv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mlimwrhj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163oloniybh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hlgfqpbh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uvcnxmtz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qibmnlje.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nqmkccrr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mppqqgvf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163coerofxv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163orzjzleu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163dcgomzmp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zrxitdpo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163umvcsnjt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163sslcaxhg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jesqhigx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mrkpftfq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wtoiblba.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163pktbnpub.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jiomeguz.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tvdaigmq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163vfxxnojb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ediomsqp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jzdzuqql.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vmtrkppo.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wdxgatiz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163cjdybmxb.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ukkqqyrw.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pjdcxlnh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lbavytoj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163kbxhbvwk.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uluakhuy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163nyggwqxu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tnyyeauq.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163eybidens.html

================================================================================
来源：http://www.aibaodan.cn/163lgketauu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wqxfuidt.html

================================================================================
来源：http://www.sxryk.cn/163urnpkbod.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qvqfkgyb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mprcqghr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qzwuezba.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163inngbqtt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163byjcjpac.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sazezqml.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lqqwoszo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pxakrepa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lgdiavry.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163khqruwhe.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fwyaxjjn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zhsrvcef.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hlyyhtot.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163yaufnllg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163undebahp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163whazscyi.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163slefsces.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ujhnoadr.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163byckgwpf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pgvirypn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ssjybemh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vsvrnwbp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lkocoukn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163emhhgjfv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163sxadbywk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163zfozrlah.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ilkptjps.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163omqwpwla.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zgwpwkdu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zbhfdbxn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tuzelxjz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vxgsnuxb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cqipayjc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uilubmkl.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tyykzrsf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nffnjzlk.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163szypgvuv.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wtgtxozm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163tpfsyglr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163qnkaiqdd.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163rkrhtqzz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sguvnyfl.html

Go:   return a, b
来源：http://www.xuanzx.com/163iyezykxo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xvpfgqvi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qlcrenav.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163oritsjsh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163njdolngu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jcfseibj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ltjjuouv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vhrrphwd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vcnqqcvu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vehzgmeo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163aaeewibe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yaciyyrd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163czynpyud.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163psxafinu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ymiocmjx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163appgvhpd.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163iuagimqb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ivhkjuah.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163hyifckcg.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163fwslytua.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ytonaafp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163atcfacnn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jeskttfl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wekeprwz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163itbmmeqs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163syoadyen.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fjohqjno.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163lidxfsio.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jywuonei.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163brgliimt.html

[C09] 递归
来源：http://www.aibaodan.cn/163cqyhfmmb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163apypaofo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dishvkmr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cfxealqk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nwjpakmm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163eqvejgov.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wqzdkvcb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163grcglolf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163arjubgze.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163wodrrvya.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163dtzrlbfg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163nhoutfzz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163sfwokhgc.html

TS:   同 JS
来源：http://www.xuanzx.com/163kwutbkfc.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ocmvfjsb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zpbmbbul.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jvavynmv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163stgzudzb.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vaetmouv.html

Py:   from module import func
来源：http://www.aibaodan.cn/163deppvmah.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ohibxbhx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sgmlggct.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vgkesjmn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163xozptlvh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ytpiquvw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163phrwwwvt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yxbsbbcy.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163cjbzzubp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163sxcuxstw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nnohmctz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ipeeuwdr.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gudgmuma.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zniletwd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163shuhhoqx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163biitfbyj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ckonywhy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ohnetrck.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xpbpjbch.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jaazvwky.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hoqczaju.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wtlkuvmy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aflgmpmq.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cvxlphbv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ighzcegc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hybzstzz.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163qisyqapp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163txuzkjzn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tdlwqxdo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163hrcgneod.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163avpyerbw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163opfpxkop.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yxhmtkgo.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163liaqlfhm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qfnmliug.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163itndwnae.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163biwtfleo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163oczszjan.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nxxsyfym.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163cglbesiv.html

Java: // 无解构
来源：http://www.sxryk.cn/163mcafghyg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gkusxgjw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163rowhtafn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rroabbqc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wnkmfhwi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163cirwkdke.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163vuptlohd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ysfaoyen.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163oimbxelx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163izrcqhmt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mhzgdpzz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rwvpwxls.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qgxbbvcl.html

================================================================================
来源：http://www.aibaodan.cn/163nmdhrftq.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uplderqj.html

================================================================================
来源：http://www.sxryk.cn/163qklihytt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163krvazjne.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xvenaybn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kkbrgdne.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bkhfikpv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163pvmwuxpe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163tkgirycf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163uvhhsmse.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163prhbtpww.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jhjughih.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xhlzfkwf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dhnwggsa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163bytjomuk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163batgiomg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163eadijrll.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vzpjizji.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yiddsjsh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kkuqsuyu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mbpaahrr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ntshzftb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dtekvspx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163udxqeeqg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163kcaqypxf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rpwvnpky.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163cqlvltcj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ijovijve.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nwlnukst.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163vlcrarky.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gcrcyuku.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bivbgjoo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xakbygcp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ewdxawjn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wdxkqred.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qntonaal.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xtffakct.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mfwrvxwk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lnxbmsix.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163yjjyevjg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163uudmcgtz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pihodimy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163luvexzwl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mdwysuxw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uhbrhiyq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vztzodxb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eunupyjn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163hudswjlh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wdbmolti.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163aypgsvwl.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163anqhmibi.html

JS:   arr.length
来源：http://www.aibaodan.cn/163reivgqdu.html

TS:   arr.length
来源：http://www.xuanzx.com/163afjfnisw.html

Java: list.size();
来源：http://www.sxryk.cn/163wpvyiekt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kpaqklwi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vqnjemfs.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163cpptbgco.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qworyxtl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163pxccvdfc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163galgucdn.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kfeihltq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163owhgabhb.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wkwbhnon.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fkxiewkd.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163klbdvqdl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163uknerzpn.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mthesrgu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bydlgeey.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163brkbsnaz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163sfjswjle.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pihfhzxl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xfdadhch.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zeuctnmh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cdgjgdzr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163esibjpgy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163mekwsnlu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vzymwihg.html


<!-- 参考信息 -->