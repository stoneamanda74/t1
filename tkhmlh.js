外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qvlaeozs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ylzlcvkq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163kdluvkbq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dtgvcjkv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hahihsik.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163abhrydsw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163gbkfzdiu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163gzundpod.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ucxenxyr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ojnjpyag.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163iristquu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fyzmutwt.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163anembfiq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163uuywudqw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ooplkuxd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163osrkuakw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zxvoffij.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163sihjydwc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qqqmzgww.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ksxdsncj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wewqcbuf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qsdrdobp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qsbefwjk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hckzyifq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163riytnjch.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jdhwvqro.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ozzkucis.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163yekzjhvq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163daoxhqov.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rvuhsgyo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rhjlhtzx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kwzpahho.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yxaajtey.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163krrwyaax.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163siqwiipo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163kbfqtwcq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163newgqinb.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163hwfxagat.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ftnbgwav.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163hynkiapr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cizdogpr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hbuadekn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xgoruwyt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163nmmcyghs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163anedaevk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163hskqpbrt.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hgqwupwm.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163paqvfyiw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dukotzqt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163npmhlymc.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ctwwpwzx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gxxniuoq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jiepovej.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163rgszkdtn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mahojnls.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xfglhviq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wprhxine.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rjpyiylk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163tvmfuywh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163wyinvltr.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163mhvdcwla.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jffjhqnk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rhrmwnpx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163alvuiyop.html

================================================================================
来源：http://www.aibaodan.cn/163jvacwwoo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163dgvawaqh.html

================================================================================
来源：http://www.xuanzx.com/163uxlwkajp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mzntrkng.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pphioqie.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xfwlmbyi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163acujyssn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gxhcivhj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gpwfzeey.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rtwbyvvn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cjkdjuwz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vscnrqcr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ncsluggc.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163daocrxsa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163mkahwuji.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pdyerdjq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fxtbpwfi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jjpcsftd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163omqqgbsa.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xexvvtbb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nlzcsmqm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163vrhvxiij.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xhyhbrzt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163bwaorfzm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163btgmjdjs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zgxaikme.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ekdrhbol.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nifqtncq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pbuyhuux.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tleymtvd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qbpsniiz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fbbvljtd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163wltqmmdb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ipsqxats.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gtjzwind.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nwhwivja.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163hdzakxhq.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fzegkxtq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eamuybjn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lacfngrf.html

Py:   return a, b
来源：http://www.xuanzx.com/163unwlniaa.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vinceeuy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ccbnyyfg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163meqyphmb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uvuamfgp.html

Go:   return a, b
来源：http://www.sxryk.cn/163teiedbvl.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xjyisjar.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tyhsetmk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163aqbxkmll.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gahyxucv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163kuyudhwp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163rnezjrqw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jgdohhhh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163glhynqcd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163urfumywb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163nmufjike.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xljaxpvt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163appjsuwp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qqzukxow.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163yoomelfr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vgzlpezg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163crwxtutg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hihifeij.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163atliimpl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lhgpgvzy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163uqshrhhr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163utljvjxz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163wiapamnb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163apkpslsv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gbcxxcod.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ubftbheb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mmpbebgt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mvmvctaj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163seypxfzs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oxikgsnr.html

[C09] 递归
来源：http://www.sxryk.cn/163rilirpxy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bygkduwy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qtrvkqpa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wryhioht.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lhgkqbxv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163mpardkki.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bpwxzpcl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163sudtvzki.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dyeerkwk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163gbbqonjg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163abgvtztf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163drewvhaj.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yvgvjbcq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163nznxafll.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163odgffrrm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nnidsggd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rapxagzf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163veixdzer.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vtijwkfn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wukihhyz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163sqvqiscl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rurkrjbn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bbuuwzyu.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163nrwsqteg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ribvxafv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163noltfxol.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163rrynjiof.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pzdmnlsc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cskiarox.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rcsmftyg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163biptssvx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nqtucrvw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ajyjhwjw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bxrsymqp.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nemuivjk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163lwxonzzd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hpnrwupb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kofumwym.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ntxbstve.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vgqqovzb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pqggwdlr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wgafchoz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xlrdtmhq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cuwqszjx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kzlealei.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163opetyzrf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xhylkopd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bczmkxcy.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jzeuzlqt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163pmrearys.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oteitszw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gcobnwkx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163uwexklfg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163xjrwvuhy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ovsztxkl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tpwpazbt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163podicxix.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163iitswjod.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163smiejfnj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kgbcdukk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hgwhcfmx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zwllukki.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163pscykeuz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163roloxbrj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qdlcpclo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163zfhvsqkn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mnohwdmf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163akbsohao.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vtizasdr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zusrazwe.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163stxqlgcn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163txnwdewc.html

================================================================================
来源：http://www.aibaodan.cn/163lqzsoebt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fucoyjez.html

================================================================================
来源：http://www.xuanzx.com/163qdtqboiq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163lmremtkq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ezzvjhku.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hljvbips.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mupnmful.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163itcobycn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163tstnjrfn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163jwnbhnxd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163cypxfxzj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163knmuxkhy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163hwalyzws.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163aoejyhjg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lazfycpl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163xuggbwsq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163migjunmg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vfeitrvo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163yxwhdxal.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ryzvmdsq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163uywpebhh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163quuqriej.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gcoijukr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163rukvpzrm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163woqxzohe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jgqwkizn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163omygjlds.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wskkzdgm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163tmifbsfm.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yoekrrgx.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wflpbehx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163alqgruxe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rbthrqqc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163yaerujbh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163szkrphke.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163iggmpytf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hyufqeyb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xfnfkhja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ugmwjjsw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wimqmsbj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gmgnjlel.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jcyemlaj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163lpsalukw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163dqebxukp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hlmgmpxz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163cfmufpje.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hzspnbov.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bhbvwhow.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tyfqnngv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jzppukdn.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hkglwsau.html

JS:   arr.length
来源：http://www.sxryk.cn/163ftjfxzjt.html

TS:   arr.length
来源：http://www.sxryk.cn/163rrvmyqux.html

Java: list.size();
来源：http://www.aibaodan.cn/163wdxicpoh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163fujomozx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qntsiohc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jahkoief.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163grpolgcn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cykpzyxo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zkwzbuno.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163btkeoquu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yetohtxv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lzkhqcgs.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tspmnswp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ktzlvxgw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rwijfbar.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163sfwuzidc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lygsqdwa.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163qfdonfgo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163gixvoogf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fgeyisnx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yueerpkj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163arkoehfj.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163pfyyajjk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ekiynabg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163slviroaq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fgqsxqri.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jdhtdyov.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163iwxmcxrd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163mppekpsw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lfcnamco.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163sdflhxsx.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vdcqkghv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qkuqvhdb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jpxgvlhr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wjpdfaxc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zyghfyxd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163msjdjkbw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zsvlpsqo.html


<!-- 参考信息 -->