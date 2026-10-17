外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yjemvinh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hcjrwpoa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163waspqlkz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gdoiropn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ulbbfiiv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163tcanucgm.html

[B07] while 循环
来源：http://www.xuanzx.com/163wfiwrcls.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163fiodvyjw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163aokmlqdf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163scberjhm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hwiiopya.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163egtmrhvv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163lxvxvijw.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fhybglzq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xpjuzlsu.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163qpzpqdes.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163mrtlqdlp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163odfokbby.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ycdzhxvt.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cqzrhhno.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jkwiqdgp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163sjidelvx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163gubxzofn.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lunijncy.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jyyntzgc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163tziaxglu.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oshgfvdw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wsdegnfl.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pgwlfrdu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pdnrcjee.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163krhzfynf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163kgenzhcw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ayanjlxy.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ftlkkamd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xebiyorz.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163vabpbuel.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163eikvpjrn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163eosaatuh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163azbxydmp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hcjnrlbx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kggabhgj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163yxpktqyx.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xvlxwcja.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163lurnuusa.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163illvjtpc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qjtcwmnk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sveygnnm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163yvpbsjvj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163mcbpnyak.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xbcxugye.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163vcdvgbql.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hdyfbplo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163cfkuyoxp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163shyfaylp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jkmezsqu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mpizxvmi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163frfsshkc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oetgkrdo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jvgkgtev.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zizltiqb.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vraufvjp.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163rfhfjrrl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163plrhssaz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gytljabb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hskksiby.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163fpeoqerh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163mybuwbqz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cfpriqzc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ibbvwgwa.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163alanwyud.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hhrpknxn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ufonmzwz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fcipjfuw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gqvbxwny.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wycxcqfm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yucrszso.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uqsuvfmk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hcslzemq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163kzqywtod.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163tsnfokfx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zzhikvys.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163nydwljtr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ayytvyot.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dnanxdza.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163lvkywzkn.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mxcqqmox.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zfzvuvbx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ghbcvmvs.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ikkudrxj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hsiignje.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ukxpuaxh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ntmoienm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163lulgobzb.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ojeprqsu.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hulpicjq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cjygudrc.html

================================================================================
来源：http://www.aibaodan.cn/163lebqskwv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163whjwkkrq.html

================================================================================
来源：http://www.xuanzx.com/163wfzrulih.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ufyemhko.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bmjmowdq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zlszockr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qycbeljp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sxnishdb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ghebremc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mecwcgyu.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163dxpjggpi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tcvdzxwx.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hyoaybvs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163teiezkfo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yzdfgvqs.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163pqwlcsoi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163dyseovyo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ajhwjfta.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qkusbums.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163umiqvxdd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qtbljktw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bdfyiica.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xqeaycif.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ifwhhiei.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gbjorifg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163plvsaeiz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jlwbumyy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jzlmcowi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ahjusniv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163sipcubgd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dwkmoqcf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yzqdlygn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zfcdpiot.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163njlvwtea.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rlqllviw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163hkipggmk.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vkpznznq.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kgwjunty.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ljrkzhvu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ebqpptbf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yttwlmmk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gkkjzmhu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163oeecpmvj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pozcmtzd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vhftsqvm.html

Go:   return a, b
来源：http://www.sxryk.cn/163goqzzmbq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163wwshdsah.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mxrslonm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rnchuvus.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qbsmfomu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163apucmjft.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163eherqfea.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qlukcqcz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163uynelcst.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163sofmyikr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163hrcphoif.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vpveoley.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163klblakuv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uohxslbt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pksgpled.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163halesghw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163agmsvppb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kielmwcv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tvaelaml.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163iqoppnxo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gwrxbghu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wongobmu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163neojaves.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bbjyfnfe.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fzqpmcny.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rzdijbwg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kzpfqesq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vqygmgvx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qvilrvhw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cdelvydi.html

[C09] 递归
来源：http://www.sxryk.cn/163pflqavpn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hcjetnyw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163juittmku.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kidbqwsf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dkspdnlp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163tzjkyngh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jbrmajmk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ffidnemc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163amvvievw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ajtuqdzg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163plxqnzho.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163gzbeigey.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pzvyoltf.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dcliaqcq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jfevblau.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tyrhfomu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ohakwozp.html

C#:   块级作用域
来源：http://www.sxryk.cn/163apyraxkh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qgqbwkak.html

Py:   from module import func
来源：http://www.xuanzx.com/163heqxrkrj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163pvjsresh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cqbefvrg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dwfirjgs.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163pnuwggee.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ipbhckcw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163bakqvppj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xjyptifh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bkekndqt.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ljifnxem.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163aipksimr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ywbmjtup.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kvqjfxvz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163roiwmshd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xsevqwjt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qsulntsd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ipzjplct.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163bhhswncj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jnltbjbm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dabmbjws.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163neerakli.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rfxjaowm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vbhahuzt.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dgswodlx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pucpdsiv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nhnddxuj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163elhsekie.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163cpnlgrqe.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ggzfyzvo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163blumzjsy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163aukjlxpq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163swhtbgyd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163tfyaxfhj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oalgbiug.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163cvptpmjl.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qtmwelun.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gwcoiskt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jhmggnny.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bgudctay.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163detrjcgb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ctkimbcr.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163twlwaepv.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qsukuplh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163mftnvccc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hxrwbpkh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xdgefhla.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163jmfliqbx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vjwoohrz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bsfsvcue.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lthdsspw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rkmnhykz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gcztwocy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163aazenocq.html

================================================================================
来源：http://www.xuanzx.com/163tjwyrllk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vktgcetw.html

================================================================================
来源：http://www.xuanzx.com/163qogbefxq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vxfvawwe.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163fzlscddo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xctuupha.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zydiwctq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cioswbeb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lwtuntxr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163srkripga.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lethraeb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jvhqeoji.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kqoxjrtq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rhlptxgs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wtyhlqkl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163acjxbkwt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163creoszdp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ndbyoouv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163msoopjbb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yvvcpiuh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nwzmkbga.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fpuctocg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wsddiwum.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163qqmbmsxq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jzhkkqpv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163wmeqtwux.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bhdjkhuf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163igkzszie.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jnsmdcdw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163uziyzvtb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163qzxletcg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wtsyjpoc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163dybtkuyc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qexuosdb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gbtsogod.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fwdvgkba.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163sticnmkh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163iwbwjopo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kygyemej.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rbczggnp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ephoazgz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163coxvodcw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ooqozoja.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xfdasrtq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nirckhzd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jbywapuk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163txtabinj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ytkcshsf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163stecmebf.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xyiofnez.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bmhcrahb.html

JS:   arr.length
来源：http://www.sxryk.cn/163frylakti.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zvfoqbce.html

Java: list.size();
来源：http://www.aibaodan.cn/163mkjxvxdt.html

Go:   len(arr)
来源：http://www.sxryk.cn/163hpeavqdj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lppiuoor.html

C#:   list.Count;
来源：http://www.xuanzx.com/163cdqzqvoq.html


<!-- 参考信息 -->