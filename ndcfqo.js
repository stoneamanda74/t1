外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163msrqakhs.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163uwypfsla.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163mozrtnbg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163yeptffrz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163jvpjesei.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163cpthgbxb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mtmkpxiu.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sylzfkuc.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163egdtzzny.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163khclylnb.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163unvfddwx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163opalevuc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gznsulnp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pdtxiaue.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ymdccauc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163etacawib.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lfxauilk.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pdpfahpl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fqmorfdz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ibcltxgt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163uhxuiabz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kfjfdtxa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ifoowkje.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qvhcrghr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163upcximgb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zmoqabxv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gzlzsryd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163szpmgxme.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163uoodoiwg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163snteyjnr.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163mmylqyia.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hqsqfeer.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cvegoygn.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163fdcebkme.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xsbzsbsh.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163eglndufa.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163fpkhxtxa.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163oterbdbe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wqidhkxr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163nuyqvaja.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ydjmvqkm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163kdojvzpy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bwoxiwng.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163cjxhjtma.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qrncifpj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163xekfmwre.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ayuxraly.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ardmzdbq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pppvnbde.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yhwlsxwm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163wdlxlvwr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163egecfzky.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163umcgxazp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tbbczzig.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163dawkbatu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yzooovgq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ovjtvrgh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mzhbxgxt.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163mxluswtd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zlwnauas.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163gqzoflxv.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qolpkmvq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bheprpab.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bwiqiqml.html

================================================================================
来源：http://www.xuanzx.com/163qblgubid.html

C. 函数与作用域
来源：http://www.sxryk.cn/163njnaydmb.html

================================================================================
来源：http://www.aibaodan.cn/163unfpcpwe.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gpirrlgd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yzmgmxcx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tgswfbvg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ucqauqne.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ebdjsxfs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163anflwqyz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ewheqzvt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kghdkwup.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vtdldrvd.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ghivfdha.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bpcwvmvd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163efwwprha.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163typfomib.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lkdegtsz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jdqgcvhu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wlazxune.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163bynhsevb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163lljkaxoq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ykimjwzh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163oejgizvd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163bquetdaz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jbtjuozb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fibtkdqo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163amavwfno.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163oyliascv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ttalazec.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163mcurdjdz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163pyzsjsar.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163affzypsh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163voaduuzy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vukfolff.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163muyrnedm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fxnzmvlu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cwojzsjc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lmagaysa.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qagorcaw.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163tstbdhly.html

Py:   return a, b
来源：http://www.sxryk.cn/163lyvtiezx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hntmfjzw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163twnoaaqp.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xvbvhomy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163idlqouvh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jekiihid.html

Ruby: return a, b
来源：http://www.xuanzx.com/163momahiqn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163tfwzbcui.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cumxbxwj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wyhplsyl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163fdqchcqu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kohasruf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163csuygeul.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vjcyhggp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ssniyfgo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163erjtingq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yqywkxej.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163bdtivary.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nwqewkun.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wulqbbjh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ldfuyqzg.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jjlhlgxf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163imtdhvuy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bpyqeabp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lwurtqyf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163avxplmrq.html

[C08] 闭包
来源：http://www.xuanzx.com/163niitdiqk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bqlnnqmo.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xqijpqxl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kkbjhiop.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eqpflare.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kuuvgcod.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163dkyyqokl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qoihntth.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xhozjhuc.html

[C09] 递归
来源：http://www.sxryk.cn/163eypkbnud.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ogpdlpnm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dwjeubee.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kczmyuzi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vyybplka.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163luehbhri.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tjwwllsk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ezalchxe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vathpvvv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cpqeilha.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163botuhvom.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163vsfirtot.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zmynfzvu.html

TS:   同 JS
来源：http://www.xuanzx.com/163tddpmdkk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163enpadawh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163cavqvwvu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fuiucagf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163xdtptdot.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163neyizjds.html

Py:   from module import func
来源：http://www.aibaodan.cn/163blnpiajd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163brawkxfb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163enplrnai.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163xrwfliyj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163nfsnmkae.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zaykktvr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163hcwxfbae.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yoacozzq.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163uzavpklv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mcpwsult.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xknssyvf.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ngaugsdp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zcxwksbj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ptlkvtwl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163txgfvtkr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jxdioblk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163acwtvcri.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163aimnktbg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163buqwijaq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tvgdhvfy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bjyqadwn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zpjhgfvj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pxwfoika.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163raemfzmr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163rgpwkicw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fdmqzfth.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163abscrwrp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163kjaonxxy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bfhdwrxf.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163xozobeta.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163auceeusu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163marrsccf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jcmupvub.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163pgreyonh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lbgdkxzj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ukrexiit.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ehbucixj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cidnwvhb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163lalkjyjo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163mavoqkpb.html

Java: // 无解构
来源：http://www.sxryk.cn/163mtajigpa.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mcrcnqli.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ygboyzit.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163humbtffl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163eughbhlk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vltbneeg.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163osgncqsj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163asdcfxje.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gnosmsii.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ucjzcqzl.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nszivdfl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163soxvnnyd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163evppvthf.html

================================================================================
来源：http://www.xuanzx.com/163acordwix.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lhcwnllk.html

================================================================================
来源：http://www.xuanzx.com/163tpoaehee.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wimiweqk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vponeurh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163narxiaxu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kmapwnag.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kzcgrgqx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ozmkzhpl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ivorqwoz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qvgzuovt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163szktujts.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163strebcqw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zpuigvty.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fninsvdz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ktqqdifg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vswcjano.html

Java: list.add(4);
来源：http://www.sxryk.cn/163czuqzmry.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163sqlnudtz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ksuatvet.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163xuoazieh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mqynerzr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163oujmxdbp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kgdxckxb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ckcbywjw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cdeirkmi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yeufexve.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163iseeljds.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ukxppytp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163iwrtmsue.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163anstvdrq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163esjepsul.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163itvbdnam.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xtmedtrn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mpopwjpr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xyegdwia.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163avogfwns.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zunjlvzx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163rpuoefel.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163purqmsdm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ctwhhlpt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iaklmpbx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mllmgbrn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kzuphbgd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zcyldjzg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zxzvlqmm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ylmzdbkt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rhlkxrmc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ozzvrcsh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163vyuqphbr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163lgiicnlo.html

JS:   arr.length
来源：http://www.sxryk.cn/163rurieonl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rpmjwuht.html

Java: list.size();
来源：http://www.xuanzx.com/163onvdxuhz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163uxhceivi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163npypqomt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163fvcuxuyt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163azkhihag.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163lcjiawgd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163waruwhtc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163deoxqucq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163njyhetug.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fqbktfkz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163pmghwwxy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zhvouhuc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163twzcgytw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wwtkkrgl.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163uznzqmke.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rdimefoa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jsvzycvq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ooetaczs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163uafdfebu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163itwnxtti.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jsnbanxh.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163bamghzou.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hchlyhzw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rukbucro.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uvgmsuxl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163aswniuse.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163oxfjsiej.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163darbhedw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jqiscfbj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hoxftulg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163aojfswtz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163zlgzpepw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wqcrkccz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163segnkjwr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fgrkjpvv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nnxgdbwp.html


<!-- 参考信息 -->