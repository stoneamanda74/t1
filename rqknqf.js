外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dduipmrq.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qmsicnrn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rkltimcd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jwkhugbc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wthkkcvz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mfnpcilb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zgmbuqwy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163wqeygxsj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wjkqzovp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163aqkqxbgc.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jcmwtogq.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163dlglsqvd.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163cbzdqeqz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fmthsbrp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zhlhdxkg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163blgeisjn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ewzgcihd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163vxynamng.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pchtkjnd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163updhnkna.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ulunflgb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oonuupar.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cfjygdov.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163najxipaa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gevuiisi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jgwazdqj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163otefjqbs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ijarocuc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hcunhppo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ogeikywq.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cjnqtfdk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ammzsyjk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163daayiptu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163iwnadask.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tbwczizt.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163embpykut.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ntlwoajk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ydzeytfa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sukfeegf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163cbtamppe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cpznwfvu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163echnyuvh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kvfjwhyc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lbhgbvov.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163erylkcmg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ehttaidp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163gywlgwsz.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163rvclheju.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zelhbbnn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zknydyrm.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cdihgbvp.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163sltafwqq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163cbqojbqn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yhizcedd.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jygkmftk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fyziexrp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xcbtspyk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zeardzmp.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wsyxsqfs.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vxcuzikb.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kzxadjok.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163nojtwzyv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gtcnjcde.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163aqimxfwp.html

================================================================================
来源：http://www.xuanzx.com/163tfplierz.html

C. 函数与作用域
来源：http://www.sxryk.cn/163sezaxszf.html

================================================================================
来源：http://www.xuanzx.com/163iegyeiow.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ztopqcaj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163walfsyzx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163maybfevl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ntrmnjur.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rmbuybxh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iqlldyhs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163majeqikj.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163owsjclof.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qnoatdqb.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hzixrnzh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163snkrgrza.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ycapwmjm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163sysrvpky.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tjxneupk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163uhznginp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fxtqvzgg.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163sdydruyc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tgvbzhzc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jeeghvsz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rcgywzgo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jsnxtgoj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ejvoamde.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bbusgojj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163evespflg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163mefvqpzg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ozgalvvt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jjfqegpt.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kowjenmn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163extuooxm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lisokzzg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kfxzeecr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163toqrertg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ktmkkoep.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wsqdpcwf.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pgouhuxs.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163znqnnzbc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ygnozygu.html

Py:   return a, b
来源：http://www.xuanzx.com/163ycvifsoo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163upnfurgx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163expjzzmr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163zxsdfbeg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rcjvijwm.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wxavvfoc.html

Ruby: return a, b
来源：http://www.sxryk.cn/163qenmtssm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163edjklmaj.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ydudlxsd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163atriybcx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ezeyypyl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163iwetnyhq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163phijgtvj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dfcnngtp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kdfifdbp.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163riuyolqs.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163krojlqrg.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163nzgvojhc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bnvblezb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lmccgqxh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163vbojkhxq.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ilkisbnn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163fdtlhlty.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zyeijdub.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ajkdaiqn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kxzslyza.html

[C08] 闭包
来源：http://www.sxryk.cn/163bjoufbuj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163mqidunck.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ogrjebba.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zlsbbaoa.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zgiwbunh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163oriifpbl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cvytmits.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cajsgeju.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tuppyebn.html

[C09] 递归
来源：http://www.aibaodan.cn/163zefhsrcr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vlcmaimu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pwqwacez.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lgqofuff.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tblrrodk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163eulmgbfd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pgjizsna.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zytoipwf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kammpvda.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163uwhtqxyj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163fkxzlcjw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163htdggeug.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ehbxeqtk.html

TS:   同 JS
来源：http://www.sxryk.cn/163fqzkcetj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163floyipbf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zlamyaiu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hzgeefrc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mjownxzt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dusbffxf.html

Py:   from module import func
来源：http://www.xuanzx.com/163xwkdgooq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jqjkygri.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163emfoqpfe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pmvkzmsr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tlxkrlad.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pqadawil.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ptqsasds.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163dabsgkgv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163lqrsyjyp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163gflklfzr.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163srbxwozh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hlcweych.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nuhkmwgn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163prpghofr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163prbtuqqq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163oftmddqx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ngjnngxl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vjgvnets.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163caepattb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wbrpjojx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qdmhiwwx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163hlwsbrfg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ikhcwdvc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163guyktrga.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163vpwjpoyc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163acdiygzy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163lfwqjcwu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163lwkpzhcl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ewjdemrp.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cadlgobx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163niwmtpiy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hbbihqub.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qwedtgdr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qwdkfort.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wnwlweqh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163sqhuebce.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xjwkuyus.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ownqdtsu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zviqpkvg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dvmeircb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163rrbciklm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163scbemiwm.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lfqejdkc.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163yacumyji.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163zxdobpli.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vkpzijtg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163sivvngkx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lhigkzlg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jkyqskxn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163yvhoapcv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qpthsbgx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163vnfvuyqq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sfjuqlhc.html

================================================================================
来源：http://www.aibaodan.cn/163aibrvisa.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mcscbdai.html

================================================================================
来源：http://www.xuanzx.com/163zhuszpmi.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163crrpklvo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yhzzzede.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163nlxfwrql.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ttikzinx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ywqjfsjd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163vdratubs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163mjjmttbs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hdpdwdek.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163sasshjpo.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163gfdldgbt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mtnpxssc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rmnrbmid.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nqwbedvl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hskoyisl.html

Java: list.add(4);
来源：http://www.sxryk.cn/163evezalfh.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uvrmefdi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xdtschhr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ntckwfdn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ufunxaea.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163bxzywwkx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ogtwvdeo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163envxyckn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ymkflcxo.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163pzuexyfs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163elbesjcm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163edtycmou.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kmlqjnin.html

[D04] 删除元素
来源：http://www.sxryk.cn/163uemvpwuk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jveyzbjx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163atcmejym.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163yjjinwja.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ddmthwqc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lnbmcgvt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vhzvxnyn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163prtqqite.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zxkkbakw.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163uxtoluob.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163lpiktais.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163qfowftre.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163hfsxgwwx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nvpzkcbs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163humajxys.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163tfmshexz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ybvfreyo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vqtpyaow.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lczprptn.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163ucaxsjjn.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kcbkrmoo.html

JS:   arr.length
来源：http://www.sxryk.cn/163gkesqiyf.html

TS:   arr.length
来源：http://www.sxryk.cn/163clyildll.html

Java: list.size();
来源：http://www.sxryk.cn/163gyrvzwgx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pzbmbkbv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163voitvols.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163cwjilffn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xolaunor.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163flxitfwx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163orokonuy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nccdapii.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jtodnkxw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xlnejdrf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163djutaaai.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vbpxidfi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hijkewld.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aqswfmyr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163wbujehde.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fzktbqsp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163euhibroa.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163mxsawvam.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tjwedjts.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rhzubtwx.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ywldmuqm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lqrqaigl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163clbzfiod.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wnxtrivc.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163smonnjub.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163epencncq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ytatjmvw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163scqmqmub.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163pgrjfbtm.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lpopfvnm.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163aowgjrdv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163pqapcsad.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kwsedsli.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bdjpuxuo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uqkscyew.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jqdqnspw.html


<!-- 参考信息 -->