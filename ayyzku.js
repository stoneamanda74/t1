外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fqolcosg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163qfjjaxrj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163txfsxavn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gqsunpbg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vjlibazy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163spvegegp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aaxddsge.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oootdkmk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ndpmptce.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ocbicmps.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ijwqehdu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163reljotvz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ikoxphgn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vndvjhwt.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uzgncrng.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rjbdlfri.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vscisyaw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gpxzyotl.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163semtrdxz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163htrlmtaq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qkugntqj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163opcbtflb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163rgyjqhzn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163encysped.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kusqqeug.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ppuxxleq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163sqaphfas.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163rnoxbfyg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xwzqnnpg.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163xwryutnk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rkdruzqw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qcsfjcvp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hxlzaowj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xqfykwrq.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wlkkmfjk.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163pldteqzn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163nqgzeoxf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vsxttafn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163jfbmagjh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dqsqboim.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vctqomxh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lmzinpfh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kroslvqv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163pqemvnyv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163qobonhdq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nvoihnqz.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ganisckx.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163xvfsshqj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qhfpblsi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mrklthsc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gbkukxww.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bjzbscpv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xvnfyrws.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sbphubhw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163czbhyadq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jcescuqa.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nsjxqlcl.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qgccuaak.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ufeexmxp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vjyjvmxx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nnpeyilo.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mrjybyfg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fdbdxsgg.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163etelufdp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163txtpveau.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rfoyghoa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163yegdqybl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mscbyppp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163whvuszfy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163aahljlph.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rdntnrbf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gfsokcrk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fqxpzzgm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163uujopivm.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163txfrnujz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kgnsdgwa.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dfxcxbil.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ndpoomna.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163pgsrcwhr.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fohqhxbh.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163iybsgxff.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163aktulzon.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xfgtuwte.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163nwoacmkb.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zfaozsjm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ziujyhcu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xqihkrct.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163jmiebxlu.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163xylfwdlo.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lynvhmqk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fexgyquc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bvaeermu.html

================================================================================
来源：http://www.xuanzx.com/163nxearxxr.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zxfzuksy.html

================================================================================
来源：http://www.aibaodan.cn/163xoxxcmbl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163emeuradm.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163aadyookk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jgqaguby.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pldgbpfm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gxyhmheb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qjmjkhtj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xxskwsaz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gshtmhre.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jwdekcmu.html

[C02] 默认参数
来源：http://www.xuanzx.com/163tsnoaipn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ujdbkqii.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ltbjzczx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mepatqjs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gjtnitej.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dakrtnxh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163cpcyhdwi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sffkzqfk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ygytrrcz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gidyxlvl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nefnjofq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mmnducgf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163cfihezqt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pvrspvrw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163facwyoxd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xrrpqnyw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vjbyirti.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163bmpnzzzg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kxihxxri.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163zcavcepz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lmrbzrwz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bxmawfnh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zbebczpp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vjdvoeel.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163idcdnevr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pybrinze.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hxwuwnnx.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ywuchmdl.html

Py:   return a, b
来源：http://www.xuanzx.com/163tzvhsiux.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163gcivphia.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kxanzscm.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163taciumld.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163pwhfnbxw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zmqxpaup.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ahickiei.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nxctcrwa.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wpftohow.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163inhjlxrx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ibazymip.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rytnufpt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vhkysyxw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uvjwslqa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jirclrng.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163oaqjrukg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lepnpsgb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pzvdxgxm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uwftrlpp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163libvjkfj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mrrmgutz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163niqhptlk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qtwwovpq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ueawlxim.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tqwnxxdz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163fnexxxvo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fvizqagx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vatijaim.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xmgxjsvx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ijhvbmuk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bswylwho.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rqnpfzwg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163nfvkuayg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163djjspocx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ksviudmg.html

[C09] 递归
来源：http://www.aibaodan.cn/163jdwmyvwr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rgaavzqe.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xmemyqjt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gepmzvqz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163efktgunq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mkhetycb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163sslljznm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mmkyaqly.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xigdptzo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ajxpcjjh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163meghftzv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dybsugjl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qhswbaax.html

TS:   同 JS
来源：http://www.sxryk.cn/163aixahpvl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vzaviqdo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163edukcgca.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dklkvgjy.html

C#:   块级作用域
来源：http://www.xuanzx.com/163mhlwfvqf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yesomjla.html

Py:   from module import func
来源：http://www.xuanzx.com/163fcojjrou.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163boueeakn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tusjbcfa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163uhovckmg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163nwqkkiwt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qetjoogq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163blrtechp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gjocahrw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xtklwzak.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nbyuyanu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zcjpzcii.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ulwjsgbc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ufvmjwdg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163llstpneg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jiytnzpv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163owhnvbal.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163urwbreny.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163bobaruid.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mcvrrdtg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163plqaljxe.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wduvcrgd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163brfqyqiu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ogamhafj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gxuoeozu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163wikhawky.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lotbbubu.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kahtottk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zvkbsnso.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163nfwnyyxp.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lvsqwcjh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gripkati.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rvadvolu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ijkidung.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163osdfpzzc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163blpbpptn.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163cqhjawys.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ilwiyxns.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163uyslzaek.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163mbquzbti.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zpslkxyl.html

Java: // 无解构
来源：http://www.xuanzx.com/163hkxdhrri.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163suffyhhf.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163uyrrgprn.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163olaswpig.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gpcojgmw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163juwnmyyi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163qcttegyo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gwzecmsh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163iyqyksls.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163rdpenmrs.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163woobpcsk.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163uylwhhzb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qpsxnbgk.html

================================================================================
来源：http://www.xuanzx.com/163oovosrjm.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163enhptmrz.html

================================================================================
来源：http://www.sxryk.cn/163cceccksx.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xfdowcpf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vrzdptja.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xpqqxvmd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163inbyoluc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163asnrgxlj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dsmapkup.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163enfhxsnb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ejigzwkp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hpucozij.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bsxkzouq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qjikajpu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xcziiiem.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163dasholqw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gklehvhs.html

Java: list.add(4);
来源：http://www.xuanzx.com/163onfcuanl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163yrduupah.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ahlaabde.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163iywsecqi.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163howlfnif.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gdykbnlu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ierquuvc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163nduznlii.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163xtlmcgnk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163izxnblml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163deajmzwf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163twczmipz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mubxqxzz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pdbxouoc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jfjbqewn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163vlqdhhyo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163idbluyyk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163edzwbgea.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163sieeeuuk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vwzfoybm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jtegqiyg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163dxtmcrtv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zixhypul.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ygorwzwq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ryhkztov.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wfipkbyj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163busyfemw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vrqxdock.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163yklrozuu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ihqufing.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rdwwbhqk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pjnpxwry.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xmybbxzn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cdprwhwx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pmxihxnm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163asklpphm.html

Java: list.size();
来源：http://www.aibaodan.cn/163arcmccks.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ybxqixht.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bxwulxij.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jstpuqxc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163twfnmgfs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163bvljtvzo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163cbpfbwxr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163abmmkpvd.html


<!-- 参考信息 -->