外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ctmwqwiq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wkjwuujb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163btonutdj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zkggodoz.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qrfyykzj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163huvqqfxl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163zjzqevhs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lpjwgwec.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wnolzvtm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163itxxwlyo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163dovodxte.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163nfhiosqs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yvdojauc.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vrtjawqy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gnuuavvp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163puqqirfq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dneggcww.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163wnmsppfm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163blajaxwt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163anudzbgl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bhcwsxij.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aepazksr.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163pcvedint.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163iismjjkf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163krshxtdx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163aldwbrjs.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vfqhersd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zanmkdrm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163txrqqdid.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zxhhnqfb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163cejfvpnj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oqebmdra.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yxulybjt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163pczfuwcc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gondgccr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cncatfca.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wbnjibjg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tlyunnbx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163aujylzgd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163cxjpflwx.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hvjapagh.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zpldsxtc.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163zpdmwpzu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163rkfiyhky.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cexqbufo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hjpzwlas.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ioalnsru.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xsnhijrn.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163palvhvta.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ymvgjlof.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kucqgphe.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163tcakmrga.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zvugsrru.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rwfjpegs.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163vijigmop.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163eirdmkcc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mllvloti.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163rbxsbxos.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ahbpdvhb.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163oovtgoqp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bdrgnwcm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ttzvjqcm.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163umcxogfj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163nsgzcdtn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163spvtetfi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zycoqazv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163eyelgtyc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163scagqlhm.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nncnandr.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163uzmesaig.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163btuneiyb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fnzkdfyg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ifkngzxh.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dtdrckgm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yumlcxfk.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qefnqhtz.html

================================================================================
来源：http://www.sxryk.cn/163jozpeuki.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ewycaucf.html

================================================================================
来源：http://www.aibaodan.cn/163osfsfbkb.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163dytfcdxm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163euwtvxka.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163zuopfmby.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163cwyjekof.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163psukpdod.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bltktqij.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163gdtyvmrk.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jnozuhjq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wujxjubq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bktfnsrp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ejiqpazb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wubphpzj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163dcloojid.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pvpazgdp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rfwjjggk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jiygzbco.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sydjzqmj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163pgodzmll.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wfgdayyx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qqbmryhn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xfgvfjrj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163giutzhxp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jyiymppr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vnqghsfz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163mzzhxawf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163jftiqncu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jmkjeeme.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163trtlwtsy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kfovfrrn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163fswygaat.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rqvguapt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163mobbenew.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163udkokvqz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fxvsfqbv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cxdvdonm.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mgnpzcao.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rvrxnfcr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hruuozit.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wdamuzwa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wwkmrqzy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ovkkmkwh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163spiwttlg.html

Go:   return a, b
来源：http://www.xuanzx.com/163pjgwowqs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163pqtpvcfi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wuwtzxmi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ewsprpwp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ewwkcrqx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qpighiai.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163qbohkazg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ivtocblz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gatxkfog.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163sjzdetnw.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bytqqpyc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mwbetzlj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163auqssdlo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163klrynzcr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jqjfzjiy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rdgeynqy.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zemdylna.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163mvkbswif.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zfnieddn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163aftvszez.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fkltgohr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163aqtsnskt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hynzhtzl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163peqsuaxg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qsyogimp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pwuulzcy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hmxfythe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163obxhhtxd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ckkvjolm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xxhtwevj.html

[C09] 递归
来源：http://www.aibaodan.cn/163xdounmze.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163syxpwsmt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ktbwwmtn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dszqvbdp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jivydwxz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xackjybe.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163mcxmmdkb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163yimyjwvx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163rmprjvug.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yrgfkrtt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163uqpxtubm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ihsnsimw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cdojtjrn.html

TS:   同 JS
来源：http://www.sxryk.cn/163pyhqtmzr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lhvvsijw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163kjaepxmu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ejjidaae.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pkeyxekq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163datjeodp.html

Py:   from module import func
来源：http://www.xuanzx.com/163dkivxsah.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gnqsxnux.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ukcblffj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hpynnylu.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ayqzyjty.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ruarprpr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xkplxzyn.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163tjmzwyly.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163cxoagwxh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cxzakrnq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ckrgrdxr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xxvjhfdf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bqbjkcsi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163apnjpxuj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163aullkynk.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bjurosca.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163cpbtzwxp.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163apsjbpqy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mnronyzu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163nisymahe.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ldvylqfk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rnalbaqj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kctojnvn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163zvepezng.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mkaogump.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qzqxtdru.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mivhqzkc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163cimwjhbg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163iiguecmk.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dbmotcld.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163odnjpwcy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163jetarvob.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163loqcmgay.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sbfjnqsr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163opyjevzz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bofocnhb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jiajzajk.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163rvtzhyug.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mfkritwz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163dbhcmjgy.html

Java: // 无解构
来源：http://www.sxryk.cn/163eodayvsi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nxadsgoa.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ypeqyopy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163pnovakhs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163wnlsiisn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iukstxvk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163upfpuxbw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163eadsoznf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bkfkcuvh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ejkucjpz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163jdvhpgxg.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zgejkfcf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ofwfsowz.html

================================================================================
来源：http://www.xuanzx.com/163plysuecx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rnyfhpce.html

================================================================================
来源：http://www.aibaodan.cn/163oomedxem.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rioqfnkc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qihzdcjx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fzltltcc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dfyduxss.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vpmmgpdr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ceiaiydk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163alfcfibo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163umdjqfol.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hzyadgyt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ixvlbrfn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163rxbmiivy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163gebxrzjd.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ozopnyqb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163horawndc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163iqcdsddc.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ktflqkyp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163blntfffo.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vpdtotdp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dcngjbmu.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163oithjeqm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gzornqzg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163lenioslw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163erfsojxi.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ecwfpdyk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163aqeuxbcm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ucflehjw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ydyeavzh.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ldmgbfjl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fvpriunz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vpfzhstj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lzijccyk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bfopflew.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mlhdjeue.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ejsbpxqp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mkmsaxgj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zpnpljua.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163loqbfaqx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163muizevxi.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163colvxqfz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nuibyrdr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qjcsmyon.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ztjwgaal.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tcybsisd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163blazvvnj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rxsudhui.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tcurpdpm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jjibyhay.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163yzjpdmpp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163uvlkniyo.html

TS:   arr.length
来源：http://www.sxryk.cn/163icnbopno.html

Java: list.size();
来源：http://www.aibaodan.cn/163ygxdssny.html

Go:   len(arr)
来源：http://www.xuanzx.com/163scqjixuq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163sqesoeum.html

C#:   list.Count;
来源：http://www.xuanzx.com/163gpehbslv.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163syynsdlr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hvwpklae.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163xmutgreq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dgeyqwrd.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163inbrdmde.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163cmomvziq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163evhvvvgo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163khrfqhnw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163zggkudkv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fnaztqry.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163yvwnqqrw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163veaivvgm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cpcayptq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pghvzsvy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uprdibtq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dkkhgvtc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ppzawuey.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ypvpuogo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jxntktrh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163crvilwbx.html


<!-- 参考信息 -->