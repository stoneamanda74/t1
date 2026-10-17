外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wpiiamou.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ybwpxddl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163sbbdqick.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163bllqmlum.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163unimzsig.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cpjktnce.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bbxbixfy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nfbzkenh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ajfyxrux.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163pwdtksls.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pnxwvhxg.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rusokynz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wcqjyhua.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ifestwvg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nfafqqau.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163mashpriy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163avrrgrzl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xzdbahln.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xjdwkpfn.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ddisnrar.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163vfnylglq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163cwooewfq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zledmsoh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bhwapdvq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rvxbvzfh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kdobmgdm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ecglzoqt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163phqdqoaz.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163gslpbezi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163lgcalywm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163brpsgjys.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ukzwegoc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163onhkiwzj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163silrhrkf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tzwjchkx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163akcfpcgp.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163irjetape.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163yyxvbbhe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wiwreafy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gdqrhljd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dpxzavxn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tjahqhbj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163quvaurnx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oyvtnxkm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163tagzwgsg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163guhkmsjk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dzgybeku.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fbgyvpqc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ogiegmvt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jxkpgnwv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yhacpvpt.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vmnqzgaw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163iqioswbt.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fqochjlv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163feadkowp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nrlffxzc.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xlfjqbqh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zjsgiuef.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163moirvfiz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wgzpxwow.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163awwgxcfl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163swhvplxa.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163zyzuigku.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nsavjkaq.html

================================================================================
来源：http://www.xuanzx.com/163vcfvugjp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163mybjkzey.html

================================================================================
来源：http://www.sxryk.cn/163gelldyeo.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vtubfvxa.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ayrkumad.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dzziozze.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ooueormd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wtycjzvr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gykrgbuj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jdgiwmid.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163bhnqwhmu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bahqbypg.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xkreqnyp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dcebflzw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yiwinbsc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nupeohja.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pkaidvzp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163papmawig.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163nsxaafzn.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163knrkeorb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163kctsadtn.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kgickddv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wpicmcyj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163sqbcxgyt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fkabkheg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vswajkhe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163oocpfxtf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pulqgpaz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qruwcvue.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163pibabanv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163suceaqnt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hwaydgvm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wxvscycv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sexqmzhd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163uixepzpv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163iahoexsw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ahjtpuhp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rkhpymgi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bhaaxtxk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xptxnyhh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zhejdead.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cbxukvrx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163upjqcfwl.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ndjmqvjn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qlkiwjak.html

Go:   return a, b
来源：http://www.xuanzx.com/163mthsivxq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sclijixo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qnkoefjk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hetoyrsu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xzpnqlex.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dtyepmhq.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vtlaznsp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163kyxbxued.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163iifqibcb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163gaqzfdos.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163shwhlsqo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mpneuics.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163npakuqwy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163plbaiilg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iqnqsxcs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163xqgtksun.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163blcflqvy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wpceuluk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163bhuzoixr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ihlfcyek.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wdkkbgwq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jexgkmew.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163dtcvvfjy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vkbcqkbf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gkpwlpqm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gvvwtabu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ewpgvnfy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163desbuujr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hmqfpdvf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gdffpvho.html

[C09] 递归
来源：http://www.aibaodan.cn/163oymrjtex.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163upbpbyes.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xgwnynbk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163julnesth.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ngjbjfhr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jsxcgopp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bqwwfdvn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163fubmyvwb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zzfwawbf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163hrxjcjib.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zgyyzzem.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163brizonet.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jcelsvcp.html

TS:   同 JS
来源：http://www.sxryk.cn/163vkerbdjv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ucaquncv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tpaoztrb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vrsrcmol.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nxogafig.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163fqjdkggg.html

Py:   from module import func
来源：http://www.sxryk.cn/163euyozzxz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163iftodkwc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wdgwwulg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163npgyjzdq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vhyqemrj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163kdavdehv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dqtvhxks.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163rhxqgfah.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zuzrsgul.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163oznpsyun.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fkjvectu.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eyrponqr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163koqlwxez.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mpqpuirs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163muulnoed.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xvpnjotv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gszptzoi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dpftwujp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qrjiaxqb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aoypwexn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jvmiwlxv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163slwvhzay.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zxpgrfwg.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yntsiait.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163eyufrqav.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vyjvylta.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pzrqpntu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lomknpsj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163grupcccf.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163mqdxqzom.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qhldtypw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nvzfspfw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163eaqpdgkv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yrgrtspr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163boyhewjj.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ggxtiuzu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lgsldefs.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yficfiue.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163shmvehfb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pnvqjpfc.html

Java: // 无解构
来源：http://www.xuanzx.com/163cmdbiovb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rhunnima.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163voupcntt.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fwjwfkam.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mlmgljet.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lizmpcda.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uqkgfhut.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qausifbr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iyovhfhb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bdrxxfvt.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qzunanbh.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ihlqznhq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mynmettc.html

================================================================================
来源：http://www.sxryk.cn/163ievromnk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uvbetkkf.html

================================================================================
来源：http://www.xuanzx.com/163cfmqzbby.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jsdiuwdn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163txdoavzz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163lxsyeskk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163utcikqmi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gertdugj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163kylicjnw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bunazfpq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163uisrgucb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163adqcfczy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163locvxmub.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163kynrqrql.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163szizlokx.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fqsrjjla.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lxjtgcwz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gmzjrdol.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sutxplaj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yrlzysvo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ykwusqhw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163avbqmzqi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gqouxevo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163cwfpmdvg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163eyvwrotr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163iftgduja.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163cmnaolis.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fnazihbd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cadwpugs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163tqbehrst.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hczpsaao.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163farvqyos.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163srnwhmnk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163lobdsfrg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pbkkenqt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163okmgpldt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vfwdnhnw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163xwasbcho.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tzvnuhkn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xezffdrc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163otcnoogx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nnsqybcj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163lzpuxogp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163idejrzde.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163argyqeda.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163iayjschs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gzehpdxt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xlsbbkau.html

[D06] 数组长度
来源：http://www.xuanzx.com/163qpbatdwn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qrjeahgu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cluuxosn.html

JS:   arr.length
来源：http://www.xuanzx.com/163epnzynlm.html

TS:   arr.length
来源：http://www.sxryk.cn/163jrxnvwjk.html

Java: list.size();
来源：http://www.aibaodan.cn/163hgppmttq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163kyqkgcgp.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nlgybkyy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gzdlpojt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163hghoyuos.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163okqiislu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ovfjecqm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zooytbkw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ywomvanj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lpfwjhhf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163inkrrijv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rdgjzizk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hzlcifjf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kyxkaldz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qibovmbm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cxikhzku.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qmgtacbe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ajmdepfd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ttbssnzi.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nuvbitag.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163giypqqhe.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mqqybxcz.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163shrmuwjr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163fkqczjui.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ajwolmty.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xbdpvnrv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163earcjahq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cygcpevu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163cazjffaz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mragaiqw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163emtffjfe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163sgxxeuhs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163jwfohtry.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vhztjokg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rpphmhvr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xfkhzgtl.html


<!-- 参考信息 -->