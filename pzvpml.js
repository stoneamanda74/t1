外链999!wailian999！

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bvybmeod.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dhapnyny.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163acfxaqwt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163idpdfgyj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ykvdepac.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163loivhasl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163yujtwhja.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qzgeammo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163rbbbwgus.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fvvbfygg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wegyoikl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zsfcgcot.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gdkzimuh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uipyoumz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zncocycj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163fzpwmcio.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163aipdvcdj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163awnxhtnq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hfqmkcdc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163pwrldfnz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163uonkznrb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163maznptgl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ijhnbemj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gwcjbugt.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163dtoyqnnt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hvnbgbql.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tfjjlsxo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kntdavno.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wstvobzy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163sytchntr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163eenelxxm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163shtwjhid.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jhtddlaa.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163jclbpopj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rikndetl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kmdprbrs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bmphrjnr.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163awsrwbyn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163yoljhbcp.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xlberegl.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163elgcvwno.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163stcdzcja.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ogxrpzci.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ynabvssm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nhlxxfci.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fflyboei.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163qvqzctzi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qpdluyup.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gvxsqyhz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pzcxerwo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163pcugnmwq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lnnhqicf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163heaeggkg.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ryhyanyr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ejsgsiuo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163yusgecxx.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163fdenmzfa.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fpiccrez.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rnighjws.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zmlhsnex.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hleavbgh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gcsqpprd.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cpavnftk.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xqjfxfhu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163crzpekqr.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163duabiete.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163almhwlxl.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rxqwvxxc.html

================================================================================
来源：http://www.sxryk.cn/163gerbrowy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163djvcdgqw.html

================================================================================
来源：http://www.sxryk.cn/163jareehgv.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lppqfsmm.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vmkfuxix.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gbwcwzvl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bgwyillr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kdojazeb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xevcjezh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163etlfgzjk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163epzywfmf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qcncxfss.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163tuheqnau.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nfxqtnfz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uuqjhhkc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tjurkamr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163pwnpzckg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jqclgiox.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vyfeojpb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163kjnysuvx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jtzdwiil.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lkrnxdgk.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163khnrakis.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163gipzbnnt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rsuhejeb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qceipzuc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163vsahvvtb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163clvvlppk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gfxcvgvj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ytumhksq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163yvxwytiw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xkaezkfa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ijrbbrnm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xbvnrtbx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zmcuttuw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vxsjhqdn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lruznwgc.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nuetnjyl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kdjdziwh.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dxrjdcbm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qpgtwzyj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hsxbhwih.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jmtcjfdj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lzfgzvkc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163woskkrjj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ncskxdwn.html

Ruby: return a, b
来源：http://www.xuanzx.com/163kzzxgypa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163cqxmdpce.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163oaihiwwc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hntqljxw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163eqycvjnu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ocgtgmsz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ufzyznuy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yxfhronm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163auuaxuaw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vdfqzhej.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hcqbrunh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vclbmioj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lhsiqyzf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163kifmphms.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163aablbrve.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hnfiamfv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ffloriiv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163eylnizwr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163byuinggz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ixvupzjv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qdfcvsvj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qhgqbzqh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163uwgzdpuz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163moaanian.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zryiiget.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vivvreks.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hvgvuoag.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ucaabmms.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qiorargu.html

[C09] 递归
来源：http://www.aibaodan.cn/163uupzhcgv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163radshzum.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jzztmffb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dwobpiqt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163lszjpymn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lzpjacza.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rvshtucr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rpbfxuqp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dresusee.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lhnmdzwt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lzumlpjo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mazeciel.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nvzlwtoe.html

TS:   同 JS
来源：http://www.xuanzx.com/163negrhtqo.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ehlyfhzh.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zgtmsyal.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ngfssayc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mifcuctc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qhsmdcbd.html

Py:   from module import func
来源：http://www.xuanzx.com/163jdywsbhb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rkdnlcbv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qisbpdgu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ffzwmuxk.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163kbtxbfhy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163xtxtoogc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163klsppsgk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yvoowffh.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dtwcvdeb.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zwecdbhn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163qawaueri.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ebhafquo.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fijcrzvm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gzhhlmlr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jnsdtlxk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jsqoaxhg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163gzzollbp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ciftxdgp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163kpesibdj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163piekswfg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xabdboly.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qxongpuo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163onmwzxuk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gengxdzd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163xesoiyfm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163zpeywqku.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dpcnlghf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163frqrkgwr.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lrjegtuu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163klvxuhqj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163kwlislds.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xwljpiqr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ixqfiqaa.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bzlqclpj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163otyyuhuk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bjqamity.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qempxgpf.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gtvdmwuv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163knbuaefx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163vhkptnrh.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xhxvunrp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wuocrdtn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163fufrhwev.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pbmnetpb.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jmqabzdi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ygulftnd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uthtbdcj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163enfjyjbi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zolnrglt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163icltxeqo.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163poydjjqm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bblnktop.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nqillsok.html

================================================================================
来源：http://www.xuanzx.com/163yihzkthn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163leyygtam.html

================================================================================
来源：http://www.xuanzx.com/163ealyxnlx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163eukgotrg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163niobrzwp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163brnhcwdl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163dhxsxrxg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rsaebira.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rcgimety.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163oonhryab.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mxbtfspq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ejnqqkef.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iwojpicx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163huubvjsy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163sbgsxfdf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ojjdsyrr.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163awcmdery.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ldjuacin.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vosdqsbo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jeotcabz.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nieltdjy.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163moyahuto.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163boipqsnf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163uaoeujqv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mwipagky.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163grcohdnt.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zfqewywj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vzuqpvds.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163khmknhwe.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gobxqmit.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163selvtrpc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ekuvvqgm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kjwdwzwp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qaaekvpy.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163fnkumryc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ohxejkut.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gawwrgyi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163zltfzaja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rhscxfxn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xrpvhpdy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nlaiqzrf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163whspouvs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pejtbqad.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163impzoupy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tghjdbsz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163argimdvw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sacwbrwk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163zpfemrfe.html

[D06] 数组长度
来源：http://www.sxryk.cn/163zrwekvoo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hbqvseaa.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163psppqryf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xhobunis.html

TS:   arr.length
来源：http://www.xuanzx.com/163hnsfyybl.html

Java: list.size();
来源：http://www.sxryk.cn/163aocnwrky.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aipgpqtx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nxrywviz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163djolcysd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yboarfyg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pthdxleq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163hnmycftk.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xohaoxtl.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163esugpzzs.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163lkfviiwf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cfobybjq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qkpwigrg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kwjcjbeg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163uernrvuj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bxzkbyhv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nftuhwlu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163nkrwvxaq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pbtsiryy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nhqsnqbe.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yxvglnxe.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vkpqhiex.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163pniuifob.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163eyemgkyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163yvpbuklm.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163eknrtuvv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vvwfzqqd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163kzzlwxmx.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nnrbzzmi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rjofwhcx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fzqqvdoj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wqemkwio.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163mdcfdgzn.html


<!-- 参考信息 -->