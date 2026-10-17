外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163pvmrwbyu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mrkkxqng.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pjeivpmf.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kgkaeivs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xaslevkz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gglbfgqk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hnuusfat.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tnnlxofe.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163huiitijh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163gsoswuhg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163swjhqjia.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wbwjoano.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fuufmbrs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163lfxcyodg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rwhaxahd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wzrzpkzn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163fwvdkibv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163yggkakoc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fvtcsocl.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ualuguup.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163xtfhmhkx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kukogsmr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dlggxtlg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vhixhvwp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163pbrycqhf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vwwkknkm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fvdvwzkb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kskspwih.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xabeoqqc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nwrmacsx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163dqdsqdjt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ipbfwpoq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qlqjrmkb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bvcvviqr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163shdqkdcc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163wfktklex.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nwmwqbmv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vrclgizj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163puipyllj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ivbjooby.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eczucbbr.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163istlgcab.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zkyrarxh.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ftsmxija.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hsplfobq.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ejwgcnad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163isjalyws.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163fltirfsl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163atsrbdxl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mgnbobkq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163okwkkehc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163vbdlotjy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mnwpmcin.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163hmpadgll.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fjyhqegv.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xcawhpoy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163frdgztgo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163icomcnrb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163aqoqbsvr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yqiewrgf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163thdxgvgo.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163izmyqpyc.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ihavsmcj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bwztsbsc.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nneflddp.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wxiuafvq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ykefvmqa.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163frobzqnr.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vfpfrdmt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163adebxyng.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163iodcaxxj.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163zxyvyctl.html

================================================================================
来源：http://www.xuanzx.com/163vfercpec.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lxwirast.html

================================================================================
来源：http://www.aibaodan.cn/163cblkezit.html

[C01] 定义函数
来源：http://www.sxryk.cn/163rmqkhbej.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163lnrzqfmc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bsodtzbe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hcxsmtvi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dqwfgrjb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163enmuzyaz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163qbdqpcjm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dxzhmcag.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uftetfzc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163igikribs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yszltqhg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ktxvlbuc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163obfvqxtk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163wlssbxtq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wmxpozdv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163psgvrxhp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dfnotfzo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tfsuvkcl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163cseojvps.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ahbjcfwc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rzflmnbw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ydsgvzfy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dtglxyrs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kfyvawii.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rwuwnkil.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163grfszxof.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163sucjipgv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163wsqrmxhc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163tighimpb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zfkwezad.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vwvhwubh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163iqhmyzrj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yfhkofar.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ygjrtnky.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cjwgpxut.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163plptdkwy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163agmaylux.html

Py:   return a, b
来源：http://www.xuanzx.com/163xsbpavqb.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ygrpqkqj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ratsdyet.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ltzyrlnp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hmsvkwsg.html

Go:   return a, b
来源：http://www.xuanzx.com/163oagoagfd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163smqmcjfk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163siqswixj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163izrmypwb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rsywpijm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bedfehuk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uihcfwiv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zuraaywo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rywnmmnn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wkfletwy.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163flbhvtod.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ujausldm.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sjolykzi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163javjndtm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163erinujgd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ytyqufcx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tummhgxv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cicyclkq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163doicqety.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ggceuuxt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163huvshvro.html

[C08] 闭包
来源：http://www.aibaodan.cn/163frkcpzff.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bgaynkjb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163xfgvdgjy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xottioed.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163iurjgksv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nsoanbej.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xmovewrx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bdbrwiaw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pkqtelyt.html

[C09] 递归
来源：http://www.xuanzx.com/163wzkjpooq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fhfxlspv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jrbdbkby.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wwlgszda.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yosapjyz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pwsrpzza.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163wjgilsgz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gszkbyif.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nxvpihvm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163gibjrtim.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yxnmugjb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ojpqzhsi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lvxhbxpz.html

TS:   同 JS
来源：http://www.xuanzx.com/163zwqumant.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ndhmmamj.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163mdguecpb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zlvigibb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163czmxbpaz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zcjbzmng.html

Py:   from module import func
来源：http://www.xuanzx.com/163xrfbttlc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163wrhnftkt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163etposici.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163niohktun.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vnnpqkgg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rsjpwfek.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163yofahmnx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163syqktfyl.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163yldfrgrs.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163bzqwzsto.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xrexrrvx.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163anwgueso.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mumiebdo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163skyeyevz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rxhijxbp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163osjhsytq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163adqpenqv.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pujysmcg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pxwpflni.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dyexjhsu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163bgymzyxp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cfafnojx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163psvrbhtr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ysudwzvb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ezfbxmuj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163grrldksp.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163efiuxuqm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gkjqaoeu.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163idtisclx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163chdhpumt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163aqkjxhlu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163zkzqbtza.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qpvmdegh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163apdhhaks.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kxwsllup.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dvffwgsw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mgjonavc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jpygpfwn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zjjyqulh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wvdnwebi.html

Java: // 无解构
来源：http://www.xuanzx.com/163ovasjifl.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zmejtdkh.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nmgrhnzj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zklsayuk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163flvmdrzv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ccocmazb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rdivcwwh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163wstirbon.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vsglyoet.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wdeavgib.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eqgbccgm.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mlhpixgn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163sypdzvxe.html

================================================================================
来源：http://www.aibaodan.cn/163urtygiqw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xgjcuvrt.html

================================================================================
来源：http://www.xuanzx.com/163glrahdlv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jwvsbklb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dhgenglt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163trgeyvgg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163snjyaich.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163yufgouvb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163zowjgauq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163nacqftga.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rpwhgttx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cqjhopcx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163osiwzopz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xdrmpjtl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ttyjnbqb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xjahbicl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163xaalrofd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qkdkmbvj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lakstavt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163anndxmtd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163vklgwhfm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163uhxefvip.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wihcxjgt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ihatgjpo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163wgekwolg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fusfnala.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vhjdtcxs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163arjvrlvy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163kdisrouh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163slirrewl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163sxhrfmov.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163icdcjfri.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163xpoztjgi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mfcznydf.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fvzbzhdd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tixoarxs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fnlhnecw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163imjdxyqf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163olvqvfyl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ywvaihxy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163vswejjai.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163pzdajouw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ummfyghz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rfafkttv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163mjqhnmgn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163koujphem.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nqydtfvn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163spjooxvw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pexijrsn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163qaxsybat.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163aoywejnz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163nicmzcxp.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pbcgrgni.html

Java: list.size();
来源：http://www.aibaodan.cn/163agsxtqwk.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yyamvnrn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163iitoqupv.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ebevtdti.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cbmnqotz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163bllkuyej.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163sqzinhof.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163treeugkn.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uwhufckq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ituqkzca.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ctcdbjvn.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163avcmfcoc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163znkqmoia.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163zzmzdgeq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gyqdrevu.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ytvrkfcj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mzjmyzqq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mwbwohdf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163vzzefuzq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qikanoml.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rikjcewu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163pmluoynb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163acllvzii.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vhkmstxy.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ggehvgab.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gmzixoqu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tqlyrjgz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jhiqgxrb.html


<!-- 参考信息 -->