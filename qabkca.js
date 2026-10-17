外链999!wailian999！

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dgfcbcil.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163kmxhszwr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163iicggxnn.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gwwxdzse.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gxfzccgl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bkadenzh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nkxqhaff.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ogdgmqbj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ylqinspx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163jejxulbj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jqpanspa.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wkmkktik.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163enlhapuk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xsmsajcr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fypzkcos.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163aaotcxuo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bznlznak.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hgcuxuyf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163mkydwwlv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ucuarslf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rjlinofh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ekjuaoyo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163dtygbmvg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163zdyqhcsu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jxcoztnf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rtgpuize.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163czjqktvd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163kjpdubvz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ozfxrutm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163krrppsmm.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vmvndyos.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yzpaayee.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wrqypafg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zbmdngon.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fkslpsti.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163osydhzux.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163comnidyn.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fivwdoug.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eaoegxmp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163irokmcyy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163pxpgmprd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kwxuquih.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163suqqjktn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zbkqznaz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sgdhqsdd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cozqclsu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163dihhlkre.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gaienere.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163adxgowge.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pmzguych.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163wpkpsuwf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163qhuqrfit.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vkyqlkuf.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mpoqakki.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163uqaeiczh.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163vupfvylr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163niqhbnnp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bunwnvrr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163wftnaqti.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mlxfijhe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163irksxwvj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nmqgxaiz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163mkehwblm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163sidjvhwg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163aiqkvopt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pmrndopo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kkrnqalc.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bwdopnwn.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163etuakfro.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gjhyaibo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vlyojdwk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163tmadomya.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163osoykoax.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163leocfkum.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qnfffhed.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163txufguyb.html

Py:   if not data: return
来源：http://www.xuanzx.com/163szqdzezq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yjqngmoh.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163clqoeyli.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vuqjdjym.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vfnjdrxg.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163znvlsjxg.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163dtadjnhw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163puccbtzo.html

================================================================================
来源：http://www.xuanzx.com/163lbsgrmfl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bcqdoakw.html

================================================================================
来源：http://www.xuanzx.com/163wspxkhho.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ugcmdhlz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cruaocmt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163inlbmrin.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ytxarifa.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ufzhbjij.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wdtniiqu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ibghxbzk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sswkjsat.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163loakerel.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nihedxvs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ipkreoba.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qavkankt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zuquemeq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163jabuvkdb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163udadwydw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163nckhbbhh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xirvjezx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163asiavwuz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gndffnjf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163wukehfej.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163svxkzpsw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fonumbmi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mpubavxq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163evimnfwi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163flzoqspo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163frpsizbu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163drzfkjym.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163vtpimcyr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163juxnlnqz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cprqecql.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vaidtnce.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ayxmerjh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rknlhqgn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bjzndbge.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uqvhdibj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bhioysqb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zklvcsjr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163emzfiuau.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dlnmggth.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163diaejglm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pndvweml.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163tcyzxamt.html

Go:   return a, b
来源：http://www.xuanzx.com/163vepedcvl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aijbsqnr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163feltneai.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163dgiasjtz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163iosemtqf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ejwcffkp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ctbqdiqu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nrmscmcf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xicwfmwx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ngegolos.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ordowlns.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nsccusoq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163eajyqzpz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nvlxhybk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163sfghdubc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ucmtjjwv.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jemtrvtg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wzcsgmqy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163iyajnvgx.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kyxatirw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163illgehdp.html

[C08] 闭包
来源：http://www.xuanzx.com/163ahmnbpla.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qpxdwshu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qhlfqpla.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ealwyrph.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ywthdrhr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mxarvkhi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163koeizlbg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ozugfcrz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uzxlgopb.html

[C09] 递归
来源：http://www.xuanzx.com/163fzgjumcu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163llyrhqnm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pvnxeekt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nxaxyqiz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pdlwkxsd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163pbuvzbom.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163vpebocvz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ylkuqynx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163jtzmiseo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163qhwismjd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rrhmhrod.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163iulsavzl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ubcakjgw.html

TS:   同 JS
来源：http://www.sxryk.cn/163nihkshgu.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qjjvgiay.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ujjnvrdq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163oezvxxcn.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mxocmykh.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163nqqrgvqd.html

Py:   from module import func
来源：http://www.xuanzx.com/163athbrcaz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fimxvukt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wldjptss.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cupldaoi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jqpwrrwd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qqdlurvn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163phnaiynh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163umnmxpgd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ulzhbovv.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zkqpvmku.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xnbwooza.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fbzeawgd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xjjbcbun.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tbgnlwzk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163seemvldh.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163orylmfyn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gknlekoh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nlarnhvc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rydcsfst.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uymwxlnu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163nvrgsppb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mdjnyyxu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163scvzofay.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jqcxsjyk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163psmipofc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163utfxgezz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163fgfaimny.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cioqdciw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163pvkozxrs.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qpztxeis.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rrorgksl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vzvanuoc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163szozbdts.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vyegnkdp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nbshspag.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163avwkremf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163szzhksfs.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163cgnkwabb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kpeyerzk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163eyibbrdx.html

Java: // 无解构
来源：http://www.xuanzx.com/163sswinhht.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163etpvkrgi.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163opzuwzgo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ernexjjc.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ljqvayea.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hatjlruk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163erbibhus.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jxpwlbmd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xmjjkbug.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wzfusrbr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163duyovfmz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163huupqbzo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qttdzxrn.html

================================================================================
来源：http://www.aibaodan.cn/163gcrmcygs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wpdavthj.html

================================================================================
来源：http://www.xuanzx.com/163pcikecyy.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163gkaibwgu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nylssnkf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ntcimkyw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lzsyszhu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hecxpihv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163duyawqnq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hulwxgbu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163pltdmdpp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fymguykg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ofmrwuly.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bpyciuzm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fdrjyxme.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163psngesdh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163htaabwni.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ngmxgbhr.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163lhbnwodv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jrgwtkck.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163iuzhuwsz.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hlzxujbk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163enciefaw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zwafeppq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ucbkfdki.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163yfshkvyv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163icqzsaax.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zxbbqzzd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fmwyygxg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163yykjydxa.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163psvljrvq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hkvxrxvb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163koqgzcwv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ryvxofpy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163cizqtfrt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ppkznldn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rglbsrgt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163tpbhhelj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qvhecias.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ixjkcjyu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163yygrcpau.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lzllsgtf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163nnkxgohv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ahrovtzt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bemfwbyo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163iwqwtuoa.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dlgtagmb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163aprzykzz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jnrjwije.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mysaugkh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uejllkfq.html

JS:   arr.length
来源：http://www.sxryk.cn/163jztrjhad.html

TS:   arr.length
来源：http://www.xuanzx.com/163zysgwcyn.html

Java: list.size();
来源：http://www.sxryk.cn/163dkcliede.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kenamsmv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ifdycnju.html

C#:   list.Count;
来源：http://www.sxryk.cn/163oilewpbg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163cazycygl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ssxvhlus.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dudcjkst.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uydtnepa.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tnxhshwa.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jkmhdmni.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hhbdvide.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xluvopwh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ituocuin.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bwjdlqlf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fdqpxkyv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sjxgqktg.html


<!-- 参考信息 -->