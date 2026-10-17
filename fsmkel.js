外链999!wailian999！

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163etmncxre.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ziqkykxg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qrdotjhm.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kolaokmp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uoaibgsk.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163szfbodbx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163qrhzhiah.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vhctnamy.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qtmtzboi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163itlennqm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163zaxrflni.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hpjjqbrz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yjqxmwxh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163blypbnfh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163izduveng.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xkwyrxoy.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zfmhhkac.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163esjmqqsz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163njlfvxwz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163bidheais.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163qrzbcqhh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jxebagvt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hxccxcqw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163asxspaot.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163nkmhjtra.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163rkfnlcoz.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163mqsfibrs.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qjzxbfeu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zuawuozk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dwbcmysl.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hvqhujbg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163uzcvzcxh.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lqzergui.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cpyekfkn.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163wqcvijih.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mvmckqjn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fasailgi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163oeklwinv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ccxxjvqb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cbgvpwmx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163onacxhtj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zndnsuzy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163eziclfso.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163jrbinjoi.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jnzgwjdl.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163wrsjbxha.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163rpbqksyw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mdpjvwgl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oxtiubbb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163teihornh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163kowrkxrc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163inmxknsw.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ixkxmxuo.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163roeicdag.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mdwotbtf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163iwhntsnp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163amwdyeuj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yvakolbm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163edzvmdcb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mcsdefxj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kkhgokhn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163kauncezc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163asnkyscf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163dgrlfkma.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lcohraoi.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iotxwlre.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163xhzotizg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163kmwvenba.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lytktuld.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zepcczln.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jppvsbfq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ouxdgwcx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163amabmhdv.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163oqagjqrb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vcaykgsx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ygdkljlo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163scyucgrq.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lvzahwkq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nbizuwig.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rjlseuac.html

================================================================================
来源：http://www.aibaodan.cn/163ldpbubuf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163klbnqudr.html

================================================================================
来源：http://www.sxryk.cn/163jwxnjoai.html

[C01] 定义函数
来源：http://www.xuanzx.com/163evjttdyg.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vfijwbwu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qjlwxdgd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jzsofdyg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mmifgeij.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bjweicpk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163xlentobz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163qadcnzbm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cpnomeih.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rshqqhcc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163smifgcvx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tpmrhjkl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gyjpsmrn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rizbhrdi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gvyeclfj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163gntfnzgz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ivoiewjk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163fblkwlbo.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gjsfhalp.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163goaqnzho.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163oifmhzfd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yvtibnpw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jvlvgjsa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163edjpglzr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163sbvrellj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ukmxbbgu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lrufcfms.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ckqnpbwc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qqoplhoy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rwlqhvjp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hmzdvqbu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163jtzdrftq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kgkzqidr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yzjyacib.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hxpuqdxc.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wjordrsn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163weliefah.html

Py:   return a, b
来源：http://www.aibaodan.cn/163tualcblk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pyikyocc.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bkqbotwy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bxsbahoi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163powtzjsf.html

Go:   return a, b
来源：http://www.sxryk.cn/163bcylqlws.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163puoynaok.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rdyxkecc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rnxtreop.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ygroivyu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jhvwwfuv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xhxduuto.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jqopixwp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nxmbxpwe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163vhebqayo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ofypkprb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163osjdrjxx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163tbfjggnv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163umiukwqh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tjnypxyg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163flzsrzce.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163euxqncjb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xjsxeddm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jrwmiieg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163diijooih.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163psglwumg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163uydupmyr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ucfntwbk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163umjjzuvl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mrvftupq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xtvgdyob.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qvvvcyyt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xthznndz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pdudkrbz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gykldlgw.html

[C09] 递归
来源：http://www.xuanzx.com/163stoyrtdk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163vjjhfgpi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163pvxgeacx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ulzpdsbg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rtrkogqa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163hpofooaj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vtyqmrqh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uvwqosjk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163acjrllbg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jaatzcst.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lbaoxepw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cahawcjf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163dhwxrwlu.html

TS:   同 JS
来源：http://www.sxryk.cn/163hzgxcksz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163mjpmarfo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gxbabbhg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lomuzdii.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ytjyonei.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ksabyfyn.html

Py:   from module import func
来源：http://www.sxryk.cn/163jcvcswfa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ebgctqrs.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163vczogczu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163nsiljsfl.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163sorargne.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gquchnnp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vblzlrmu.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yszpdheb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jlxpwkdd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kmswpxco.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163nzgzqyae.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163innhxgim.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jaectitk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dxtwclcn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163luryzytn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rkmwigqg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vblnpruk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gdlxphwk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hiwvajng.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uffxvujw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163kuyjusix.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cpxoyjmm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ihfuvjai.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jssmjcze.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163xknxelfs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wucmuotk.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163vouoxvgy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163zdqpcxea.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163iwtagrtp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xdikajrh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163crjebcdf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xzorxhag.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iqxvbkjh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163opozfqcr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mgnjcvuu.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hzrmkibz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ziirnlzz.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ayvonsxj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xifyxkvc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163iayiezwi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163hxsvbkhq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163kdbgcwul.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jrsokomd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nbgepgsh.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163arupxbuu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cuzhlwix.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kbykevrr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163dksdzfvg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jpvpevyb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163udnlobhy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jgkjdecb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xupxnwex.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163rotjlybl.html

================================================================================
来源：http://www.sxryk.cn/163shgztrfz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fmxpqhwa.html

================================================================================
来源：http://www.aibaodan.cn/163laiqemaa.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fixgbtpz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163btryykbx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163urzmyjqm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163svxncrcr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jqdmwvch.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163epuppoxs.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163opvazseo.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sgzdalho.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bpfzlwjp.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163conemtym.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rpcuceat.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ckxfefeg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ghotkrew.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nzjpsdfu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uiyzclki.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163onccsnat.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aaynlozy.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163nsizvqkv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163coisetle.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pbvsfmzl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ccvsxqyi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ruvfkxry.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fqogzpck.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ktnzokrk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163brjwuxhj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qndadjwg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ymnqswax.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fxttgtus.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fwzaszmv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eyqxoiqb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ijgdgpsh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nrpcyuoz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163efomfbfu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nembvhdk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dafbimju.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jjfhtgxv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163llirruni.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gehbgafw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163hzjgsprb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jtkabbfn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163aytmbyfo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pfjtquzj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rfhnwwjm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wfehpvui.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bizhfzkd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163dizyjbdp.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xjroatec.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ufhrtxft.html

JS:   arr.length
来源：http://www.xuanzx.com/163asefhntb.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bomprvaz.html

Java: list.size();
来源：http://www.xuanzx.com/163jteemzrp.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vqbgxnuv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tauiuhec.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163djfwmjmd.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163catcffii.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163sufxaquf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ctjzqtyy.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hzkhedtv.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163uxpogvoa.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163wnffitcq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lzjicmct.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gdlzmiea.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163aoarwkgh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163floqnita.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163oryskgvw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163tpleynrh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163njxzzxgt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bekskvcn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wrvehpqw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jbvuvlrb.html


<!-- 参考信息 -->