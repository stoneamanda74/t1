外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163txemsxve.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163omnmdgta.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rasudsbm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bswomwwp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mfftjjcw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ltlsiith.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jsbnttqo.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163oydkskdm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jvrennqc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cnidqimb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163yqwuxbni.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zhdnpsbl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cazynvqk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mdihxjls.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cjqizoyj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163misjtnfi.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rhjssqtu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163cugrcqbg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163gxfgmpel.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163cmbpnsma.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cqgzswzx.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oluqkgqq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mxdecbqz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bcurbjcw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lowpekyi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163wdionkrq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pylsxlww.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163gfnehcov.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qydrzugv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yvgekwvx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cixjbfig.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lpdshjyf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vdoqhjuo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bvksaztx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163axoirwtd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163isnhnavd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163buyehpkh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163nogynysg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yklyzody.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kbtijkve.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oesimchn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kzqnkgkg.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nbwbqezc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163azkhoirz.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qcmcnwjb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163asyitgbl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tulgpvnj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163adqetxjp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163skauqcgs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qyoqqecy.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163zioxydsu.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163iqwhethc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163judsifkh.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cbllcyvm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kzzeckpd.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163jgxskpga.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163bldiykvx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qjswxrrg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163tngjumpg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163kafovbjs.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163gpetwaba.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ufqohvpj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163zqbfrhwe.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163frntsoxh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jqljgrkl.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tgnkepmi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vvtbuncx.html

Java: a && b || !c
来源：http://www.sxryk.cn/163roqiingi.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lzwdbgdw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qzyzbufv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kolwkssn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hmdybkpq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163xvrxldla.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mftbruoi.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ievdppkg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pqygfqga.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163afwoyaql.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qwkuqhun.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163sjeobhqq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ynwzurcg.html

================================================================================
来源：http://www.sxryk.cn/163sxlflnrr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163utoqccyx.html

================================================================================
来源：http://www.aibaodan.cn/163wcojjaec.html

[C01] 定义函数
来源：http://www.xuanzx.com/163rmiqpwfh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qsiwzrkj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163egqqczhm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ivixjgac.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ypbijihp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pvbncndv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ppezmdys.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ijdkatvn.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pjuastmg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ehelrniq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qyagwnpo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163olvlypze.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zjrndces.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wviflwav.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163dtvvhzee.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dzwnksvx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163kohtngkv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pxukrxll.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xmjxtory.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163psfetduo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qhrgplir.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sjwvptun.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163usqralzv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163glfhwzzw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163rxqlplcl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vrtjjdgt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vwwzweel.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gvjoenrp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fierrfmq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lriobmwa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ytfrsfmm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jxnwcklh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163chwellaj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163raajbchj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vuwcfqxr.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qbrlpwov.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lgqiecju.html

Py:   return a, b
来源：http://www.aibaodan.cn/163pogjkfey.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163ngtqublf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nkpultey.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ibshgnqb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xxxvyscy.html

Go:   return a, b
来源：http://www.xuanzx.com/163uuauldht.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ondacdrp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ubpkzfhp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163echvyfxv.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163yeapoisf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fpvvsnfk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163cnlbeaqe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163hinlyhqx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qnpjpsbx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vexhvjkz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163iunptvrv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vnzbnrca.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nvggxypv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tgfrndol.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ornlgysw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bglbshwb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163reyzsvvy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163etniwxgk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163arbpurco.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kklvigib.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163iulvufcn.html

[C08] 闭包
来源：http://www.xuanzx.com/163vsftnctx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ldocssjc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wktsmcih.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ztvzeyte.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163twogjtti.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ipyauysr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163kxczrlrd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163xrcqiewx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kekgbinq.html

[C09] 递归
来源：http://www.sxryk.cn/163ybevflkd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rlstcxuy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mklumzuo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163woxfumyx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vitjgdfn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163bhyhbiwd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qtozsjzg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ztskeeza.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uykomlnj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ucuyrokn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lbefdbfg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vfzmxiij.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lhjpyaoq.html

TS:   同 JS
来源：http://www.sxryk.cn/163ykfoninx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ormgajih.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163erdrctgq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sngkzxmi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163iqpovzsk.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dlqthdkl.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ypssezpq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zozflhwk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163awdsgcfs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163npvobqet.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163pqpvojnd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kezpqqev.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163arloxjvt.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vsblxdyu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wmsrbnis.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gdlpjyoe.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qbpowivi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jypwudba.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cjmezmaq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163mflzahcx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163qsfjvrsa.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163omiwxnir.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tsbqzvpm.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163pwulppus.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lzuhxmdo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lxlbqslj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ndhevyay.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163scmvralu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qfycikxw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163pmktnvaj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ftzdbicg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ilkeqiku.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ofdnnjie.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gamgleum.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163mplktywl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ylxkksvr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163loliyprw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163htfaadff.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hxscolod.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sjaoadlk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bdqekket.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163dpidceuh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163dxmltkte.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uvjyfqmw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dpkjdsda.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163eyztdvyu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vkxlxukj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jhocxjvx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xxhfdwiz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ndspgtrm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163xfeivyni.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163islrgixn.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hwwpgpgo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ngejjbdv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163lkywkcjq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163toglntbb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163pjgkgdac.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dtxeccai.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kojvsfqt.html

================================================================================
来源：http://www.aibaodan.cn/163whfhfqwl.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gvmynqsj.html

================================================================================
来源：http://www.xuanzx.com/163rydaxpgv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163nbnjzezr.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ouxcusjn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163lbugdbte.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qtepxcyt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pbmlzuau.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nprcfwno.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ahqooxav.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163eqghvbzo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163yqnypfjh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dwijmixm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xlrwwjpt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kqkeftyv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lcjnktlf.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163twrmnced.html

Java: list.add(4);
来源：http://www.xuanzx.com/163oklxmjmy.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pronxkvj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xjzggjxr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tmitcvgv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xihtawxm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mmzkbftw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nfusymbr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163frqvboli.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ggrqhlsz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tcyhbcvl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163gjjezgon.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pqyyqwvb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163kvvdbbvn.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yksdirlo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bqhkbded.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mqunwzjw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gywriuzb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163huulbmsc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ypetgclg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163erwicljp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163npxwfdfq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xexcfyob.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163cguytmeg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zcuvcprz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nypozjsa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163nbjecccg.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163eroddhyy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ksxfgpnf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163omxekrba.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fiujekln.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163nysimmqo.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bvfrohkf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hxebajcr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vcmoawzo.html

JS:   arr.length
来源：http://www.xuanzx.com/163fwcfxknj.html

TS:   arr.length
来源：http://www.aibaodan.cn/163uxizsjjo.html

Java: list.size();
来源：http://www.xuanzx.com/163iuyupplp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163zdnszsip.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ailkmuib.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rbxtrquj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zpbxkxvc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gruwymnk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163reokotkh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163efoiepzc.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ohtuivyf.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hjqwagig.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163eowhczzy.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163gladokgz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xdyfnvqe.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gmenslou.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163aisodcgb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163wfdxjwpo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ztqtfgwy.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zggeedhr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ywviopty.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ebzlntwa.html


<!-- 参考信息 -->