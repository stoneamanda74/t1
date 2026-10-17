外链999!wailian999！

[B09] break 与 continue
来源：http://www.xuanzx.com/163xmbbykaz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163ugxklucx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163eddvkkph.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nigempvo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vrosdibs.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163czlxecup.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pmbzyzdv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163nknybzgq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ocmgelgh.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163mleggrgg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ogvkjmbo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163irynpilj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163dvjsgxfm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163aidihhdo.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163iuevmphn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bezxlkfv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bfxtgtld.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kooqhshy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163oatiivxm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bxlmchpo.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kqumhlof.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xtfnogko.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163irutxkpt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163olbyiivz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zxbdekhd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163zcrlhkfd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lkhcsmfx.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163drdmqjsr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163tspcqjri.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ggnueswv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bimdwwqu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nhneaolb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cldjxsck.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zrlxadmi.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163taxzlplr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fdkbfrav.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mjwovbsg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kqwyzkie.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163yugrtrlg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163obocyhsh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vajuoxma.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163gxibwycw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ydwpanjv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163uwvbmyat.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ebjnigsd.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wdgdbyfc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163llvgegna.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163cbylfjlv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ntrrykbu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mmofsvon.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dwmgbusi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163hjipdnoh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163vgmbtqqg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bgtgyvmx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163nrinsbje.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wunqrrap.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kssykbgr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163sdpkknic.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rnlixbfo.html

Java: a && b || !c
来源：http://www.xuanzx.com/163uzmclsvj.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lnvgpvjw.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qyrlrouu.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163spomerlh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163xqckbkce.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lcbkdhtp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163tqduddnu.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pstusztp.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hyagodxs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163wtfvgtrt.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ejpxfvlr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jcswdaia.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nwfiboue.html

================================================================================
来源：http://www.xuanzx.com/163sooniotg.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rrkbvmau.html

================================================================================
来源：http://www.xuanzx.com/163whiihvsn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163yarroktw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163otcawzfu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fvhndjtd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fmbhlaow.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ijpyjsnn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mpswpohq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kuntnsux.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ujvdynce.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uiomjpdw.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jgimxenk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pkacukky.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163tyilgzen.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pcdqlpeg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163nlifjzoy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nnoopvld.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wdpnduus.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163smsogukb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163tzwisuzs.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xcduacrs.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163olvtmqwb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jropgpoq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nywitkxk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yodnlluq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163stveddva.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kekzmsmk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163jivmmoxv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163uqwmedvo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163oornqbpv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bcuwrxad.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163cywxkhlq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oebanwsm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163oxshxoys.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kaobthtc.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163fnopibfp.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xmqbkybk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163oitlmcnx.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163abqsedtc.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mnrezmws.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163drchivyp.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163teinrita.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ikjctevk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163feojzvof.html

Go:   return a, b
来源：http://www.sxryk.cn/163idhxutpl.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rmggppdp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163htwomuvu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qgveirup.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uzvkqzvz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163antmomnp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dklsjgpj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163eoahrfum.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163wjhlitum.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163tudyodjp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163evxtcsnp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jhjcxndw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dlzpqjhl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ospyipsq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163upulnyac.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wbmindue.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ubigvryz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163aztphmsn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163eejpbmuw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163spdktwmc.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163giwiozus.html

[C08] 闭包
来源：http://www.xuanzx.com/163nawpyfns.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163idcpdjim.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ovcnmkyv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iywxnndy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xskzzkia.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163eipebejp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wktjktxd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pjvpjkxp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mwnyqotx.html

[C09] 递归
来源：http://www.xuanzx.com/163twkkenth.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lcgedkgu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ovdrdnrg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tabzhqqs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hscmgrxj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kfjfrmzd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bswopbsa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vqqfimxj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163iirsxpqx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163hlsdnfgb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qqxzkwpy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163abflgasc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lafofnvj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gghrspgv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163awwoapaq.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zkijcagb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jnbawksh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ybkluitl.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hqacevbo.html

Py:   from module import func
来源：http://www.sxryk.cn/163nsbgftza.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163udqfyzut.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163egbyvplb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hbtvjyuu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163wumusgog.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qdqmdxaq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163lyfascvv.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163irnsllua.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bcddzzcg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zhoqwjeb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163unqwlium.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163raoxjlqc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nbgykqme.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bqrvklri.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163otpwbgni.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fzzweapc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kwtfrihr.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xaxjhoas.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163hlfhiata.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bzbewkyq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mxpvocfo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wtkwuejs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163udoyyhof.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ngltwqzd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163epwynmon.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163qzikkbrh.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dfwcwizy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ufmcrkcx.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ruchfzth.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163rbffynsq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163usgqtfwp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163potnomvt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xumxqiot.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vtegxejt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163malnrunr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163kvmnsuxd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163alnmohhd.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zehwunmh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163enfjjury.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dpjlxmco.html

Java: // 无解构
来源：http://www.sxryk.cn/163fsmeaxnx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vivjhjgu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xakjmzfx.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163djlpwkho.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163iunsdbna.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ozbzhvtu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fvoxsllf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zcalxmxi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yommzqzy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tajowgqw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dxyijeuw.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163lxiotqhc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rdewbwgc.html

================================================================================
来源：http://www.xuanzx.com/163mjpeijjc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163zputjagh.html

================================================================================
来源：http://www.sxryk.cn/163vocwvsfb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zspzvzvg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zsaabths.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eosroxmp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iimopqdg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mybgzyox.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nhrlslkv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163crtsydrx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mjnrgpup.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163jvbqeagg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mnvcfnnb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sbshycsz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163iqwfhfyp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yfqohxqz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163epzznduy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163avimuklb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163iknuatfd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hoxcrhjh.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hegjipdr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163kjrwfgnw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hrdsfoag.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163gyuhspzs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zufzfbff.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cxsrqulh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163puwdyjrw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nrqutost.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tpqwxvep.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oagkjwyn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163uwlgvygg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163wvfbouvd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fvmrodgl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qpbforim.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xbyniwly.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163drotlhzk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163aazimkvm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xrvzqrnt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bqdgbqpk.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bhgttqvm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kcoxbycj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163klrrhfmq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163velzdqun.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gwrhqytu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163tsztmgot.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ueajzwtb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xwobsrlp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ebzgqtze.html

[D06] 数组长度
来源：http://www.xuanzx.com/163edetuowo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163exdcqqkq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cxmydrdr.html

JS:   arr.length
来源：http://www.xuanzx.com/163qztcinju.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jrqxamxu.html

Java: list.size();
来源：http://www.xuanzx.com/163lftugtlq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aeffvvyi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xfodtgzu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zcesatha.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qtbjxbgc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163swwfsoft.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xomlgmra.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xghnadvu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ktiukmap.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qaykqayf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tlyduius.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163dzoczidw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xuuigooo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163piwizvvq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rzbxompt.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163yfgbsvlr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zjaojmck.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163khzwdalk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aanwltjs.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qvxbilvp.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cakgmgdu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gqkjoeln.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wvwebgxx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kwuogyit.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vcizvurk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gjtazjrn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163faxxzrjc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163asdyvlps.html


<!-- 参考信息 -->