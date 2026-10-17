外链999!wailian999！

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ttqtdocf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xhzikwgh.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rotmayor.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ytipivlw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hqbeofnj.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163undbjclf.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jrvvoozu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zwpnmsmk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vinwuzuk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163dpkgemso.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dtihjmdg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ucqmnwjl.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kkemunnq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hjgxibtt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163avcovruk.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hhnoowox.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rmaulhmy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kvrqbtll.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oexvixae.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ogsngode.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eakcjqjg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163szluzmrn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ffevxukf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163fdcsrwyz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dxnoehqx.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163dozmioen.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hbrkvvqf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jyxdtvnb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fmdyagdu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mkwsajhe.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ewhqbroa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163qmtlpzco.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lnnpetgw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ahjjwcbx.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163myyucjnh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jxjngubj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163daycqmko.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cgwptsow.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ztdauwpw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ibcpngre.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fpymhpto.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163trqbehmt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163uerjlirr.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163mdvdmcud.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vyojaviw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163teaobsfw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163uqssdkgt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163frhnezxa.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ckvwdwpq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163kqnwoiyc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fopjnqoc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xaabcfss.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163tuebdugi.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gdyahbch.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163pfgyynoh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163atiazzyq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163grfoppmi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163bmvztbdg.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163couhdpre.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ingrujzn.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zwghjzok.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163krmngwsn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163oxoketjy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163wfkbsqki.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sqyvyfqf.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fmgquupn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kdtxgdss.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163omfoowje.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tjkachnq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ryplggsj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jowtpszu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163aeigftps.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ygzmlbbn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163maopgqze.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ndgeyjax.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xuwdslsc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xexiijfz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jlvjarae.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163cuymmueq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ehjgieon.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163arqccjtr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zdhypmhs.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nhnkjjnz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163uiltmykv.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163yhjefjtd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163eusiiqhc.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kfbxqjiq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nrkphrdk.html

================================================================================
来源：http://www.aibaodan.cn/163utfrbtdm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163smbyakyi.html

================================================================================
来源：http://www.sxryk.cn/163ybejubad.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163tngfrqch.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163axkbjrla.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kguepozq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qtpgxrwe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163medqfuhg.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ypxouizf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163dlikqpdg.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163tedddzet.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mpetlysl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xlzkujfn.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163voqvoejl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163pbziqamf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163sxtndjyy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jmcikwji.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ibkrgayu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163evjugguz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ttbmugyf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hnuqjvbf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jijxommv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163etwqbwjv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ibmbsvrv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gtiwarkj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pnwyeakx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fxosrykf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163bbliiglv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qjfwqxjp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163riitlnnv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ilkmntyg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163comobxdp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163buvgjqxz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vgycnxmj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163wdadrwsx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163kaseeoxn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kxgwhlln.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163juyuxyzx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163jqfdxizs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hmypiyel.html

Py:   return a, b
来源：http://www.sxryk.cn/163rcnaozde.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163aznkrrxf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163fqmllgjv.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163cidxvdnm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kqunmlib.html

Go:   return a, b
来源：http://www.sxryk.cn/163udswhlir.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nfsmmflz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163owaqclqp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jamkjrsw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wphnwcpm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163utebfzxj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rmugfhkk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163bnecxmhw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163okkycosj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bxywqbkh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163igkdluec.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163yuykxfan.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ltglforu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163bjbjymje.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lwdwanfo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qwbsmwao.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xcmntyvl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ioiezcve.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hdlumocn.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wzwpgbvv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163gtljatap.html

[C08] 闭包
来源：http://www.xuanzx.com/163jupdmeok.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uskatqos.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jaendorf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eixoddsk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jczesqba.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163huexwpth.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163wjlfzfyb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163nqvsssgg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163msemldbw.html

[C09] 递归
来源：http://www.aibaodan.cn/163unwlwtge.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zrytccmi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163jolnrdvd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ctibmzgo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cjmxbbuh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cowuaiez.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hlziiacx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hwaadeyy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hxolxuys.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jprxrhso.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jzypsgah.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163lgqzocjr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qtzzuapr.html

TS:   同 JS
来源：http://www.xuanzx.com/163ruldoelc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163homtkups.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qveykwjg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163fxoryaud.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pomjlbys.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ieaestww.html

Py:   from module import func
来源：http://www.sxryk.cn/163htinzetc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uievuerq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hcknbbvp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163lsdxmkcl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tjprkrvd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wznuxpnu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163yhgihkkf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jnjzgijd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163omgayxry.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mjvtskat.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iucnhbsw.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163khhoeqoo.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163unxjljcv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vwxdaxya.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ytpulhnt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dbagampw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163nrqjaucj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163jlwrkfot.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hlblqqpz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163omzxoyyu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uvmxxbaz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oeleoygf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jsgincuk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hdhajiwm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163yuarbqhr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163benatbkq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163acikatgs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163aykftjxm.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xexbnrqm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ounupjmg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gpmlvkqw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dysrqgye.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xexpwjly.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163muclvmlj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163neqyamin.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163esdvuouh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163edhcdkkl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ijgzdzgy.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qmfprtid.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zudrlnoq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163axidlqip.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163sdplmomp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ojrvoeik.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163akuhdotn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pkyfgplx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tnyrvbzb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163renbirjl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xaoufblf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163dwxtiapj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hhokekfz.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kdxrfpiv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ucyveogs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163awzemztt.html

================================================================================
来源：http://www.xuanzx.com/163dmeaknea.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qexsucxr.html

================================================================================
来源：http://www.sxryk.cn/163bgqagzeu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ajmbufhh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qvzyowwo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vcohxukx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163snnudkrn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mgzeimfn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163iiwutvup.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ixytdlkx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kaqwfoni.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163wmversrj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163oixqwyzb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qlecslwx.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163vpgubflm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dbodzunn.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ciubqaly.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vdrwzjbg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gfcrgvet.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vpyhbric.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kgbjjojm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163afoldhmy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hswwcldq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163dkgghpbx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jsrwugzv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163djvrlpgl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zgynkwbh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iotaqnyy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163ydyoougd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gpjszkog.html

[D04] 删除元素
来源：http://www.xuanzx.com/163rgrqrjva.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rkbmzxon.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tluumucy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163bszzezhk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163skroeyou.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163iddnuajo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163timtyyav.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163yyssrffo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163enzsbvtq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ilkwlkok.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163uxkhdylk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mobnyjwe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bignrnau.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163szfvvktw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163eakttqur.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163chwnwjod.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dlvmxvao.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163frootlhk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lpwpsuph.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kfdtzgxg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163mpstnqpd.html

JS:   arr.length
来源：http://www.aibaodan.cn/163rgyevxnv.html

TS:   arr.length
来源：http://www.xuanzx.com/163yxjhcnrg.html

Java: list.size();
来源：http://www.sxryk.cn/163eemkpamy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cpkvhsco.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163bzjgdtke.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163byxuzdrv.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lfbemawp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nffvsofh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163khisyvnv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eyvrcjjl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163drsbznog.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ykdqxuai.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jwvutnfm.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zoutdmfa.html


<!-- 参考信息 -->