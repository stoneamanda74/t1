外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163wrmksilm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163zbztefxm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163gxezsdbk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oevviymy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yitcgsws.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163myvatcck.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163etfnoemj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ekkiilnr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fzgqtcrk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wrgdywmf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163lgwvvnlc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163hwkivkbx.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163eljrytjd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163oxtmkqyy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jgawoewl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163plqkorhi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163piapchbp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jqwnbnms.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xofsoorb.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mhnelkow.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rmmwoffy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163oztuyiee.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qfpperng.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lmsxdiem.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163hpogmazl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163bdvsjwfw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163wyaobwuk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163rigilhqc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163forctlza.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163grylvuww.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jevbecvv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vkuwhdzt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ktmrmyur.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ewiummcp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163cxzkmwdp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163eshnpipl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lsxfhlta.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163kkaydrco.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163fwpxdups.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qojsdtux.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163evwldsiu.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pwfzhzev.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fezthoaw.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jzjfbloc.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zluocmft.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xjcfxakv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ryfzotsx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wgkwosxz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163msnitczw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ocoxnrwd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163uqsbtacb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yqhqbidl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163sibpxzbd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dkpymldl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163pquyycdn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163apgrhhxe.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xivxitjd.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ekabqsje.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mrirchte.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bbdplsfp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ervgdkuh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cwfkdqkg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yaaofupl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qtgesdpi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xsgkpgnm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mcxbbfmv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ggwmbtfw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nxnauzir.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tjbceajh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kpvhvicl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163fxwbjvky.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163aqpnjact.html

================================================================================
来源：http://www.xuanzx.com/163ukauapcb.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kqfhkjod.html

================================================================================
来源：http://www.sxryk.cn/163tsoklnyz.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uganqywj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tnbnniud.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lcqjijfs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ygqhmkbk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163jlayudqz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dfdkjjhu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zlovqjlc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163buxoyubq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qftkrfei.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bjjvpqrh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ibtcvvuv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wxvrqvhm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cfztssbu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hzusqrba.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163tezelfao.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163whsfflrz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jihmpahm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gqhipmfj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163seyddpxz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163auqfoxnt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hlsayixe.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163iuhcdqge.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yherntel.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zcnmmqey.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163wycuqwuu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qhqsvbbu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qbbugrtp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nihwolng.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163riaqeqlc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pbmadhmt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yrxhehmu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163usqxorxr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xlxhsuqj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163looyriwh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gstytrnf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iunyxilg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163okwuwdkz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163igqljwwj.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nddcaixn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mytbhamc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163fvbtxdnu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163emcjghwk.html

Go:   return a, b
来源：http://www.sxryk.cn/163ehddeija.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ounxuduq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vhalfamv.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163plbnsgju.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tfafjugu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yfoammou.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jufxxbwh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xgdtgqaj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163lqiydozz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163tmflfobs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vhgjuitl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163rgzcnwms.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jmmlzilr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tmpidfqj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wxrirobc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163awyndmqr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tayejhcy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163vbylxsme.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vviaismj.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zcaddomt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163pisxdfat.html

[C08] 闭包
来源：http://www.sxryk.cn/163xpenxjyr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163gliufhph.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163gttqgeuv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uuvpubin.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qayfxuad.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tauneezd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163syizlvyf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163cyehdzap.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ojixcxii.html

[C09] 递归
来源：http://www.aibaodan.cn/163dtcvkucl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zddkygry.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ziosgzja.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hunnwhko.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nyfliipg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163woymbkcp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163exuwqgai.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zzjbdxiw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mynsmubs.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163crwgflkb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dqysqogo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rnwkrjid.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ackeshhf.html

TS:   同 JS
来源：http://www.xuanzx.com/163uzdvnrzi.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vxmptvvw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163cpigfein.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wcmaiciw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ueofqyku.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pbmeakpw.html

Py:   from module import func
来源：http://www.sxryk.cn/163mgxwaahj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ehoadnro.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163nlrstjsw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sgbbhjqd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mezchcye.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163temrrzng.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tvpiztjx.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163eqtivrso.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fkwbkotf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163gtpcldkg.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163maeuxkvz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ozpvtcry.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oqvfeteq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ykkkygwp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ralnqgkc.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163czqpphpn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lhxixkvh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163buoymtzz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rzyxhreg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gbdofgpm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163pybsxwdt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163juxuqxmq.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kkxftikt.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163oaftfekm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zfpywoxc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hhdlhngt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163qhrzyrhh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163nmwjjxrq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tehspwok.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163esfredjh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163gwyxybdx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vbwgrzwa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163kakbqbvk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ihddvezn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wbyrftyb.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163odubozvn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pigckoej.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jzfapkph.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fdxtozmi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dtecdzzh.html

Java: // 无解构
来源：http://www.sxryk.cn/163eskdnewi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ymadoyao.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jeusepbs.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ijitcxvj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163zuprcbeh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pklpkdhv.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163acrhldkd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163aywxmedb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163iwexffvq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tpecanxq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mxidpaxl.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jrdskjsu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163zmvxbfhn.html

================================================================================
来源：http://www.sxryk.cn/163ccbuavpm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xdagdtkg.html

================================================================================
来源：http://www.sxryk.cn/163uxtcmymu.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163swfzzydq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xyyhhzme.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163zjycignq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163qfmgrfim.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qsrmqcjk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163aismlnyg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pbfualjo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zkgcumri.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kihcfxvo.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fncifpco.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163luswykwf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xvsznvtr.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163anncumkk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163twknsdqv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xoyyucmj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vdinjbcn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163kkftumps.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163yndwxybg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lzwbjplb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163egulxvbu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rwlvcmyw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163eizazspr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163cxuduhpr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163xtmpxnma.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xbckmgjk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163kbamngls.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lxtcpfnx.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ilpsyuyq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163sfbgybjs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uomvzkgu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163rmyjegrt.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dujquytv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zbayoahr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dmkteqzx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163aswmoujm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163xblyfhsw.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163sxeknodr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lxnpetad.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163chqmykdt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163iuhujjol.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ygtipuqv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163eskcxxot.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163azyerygm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lmzqzmnq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gyllehxp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fsqlpgcb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ubeiyfan.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163steilfvh.html

JS:   arr.length
来源：http://www.xuanzx.com/163epotoorj.html

TS:   arr.length
来源：http://www.xuanzx.com/163gjaphhwf.html

Java: list.size();
来源：http://www.aibaodan.cn/163dgyhvojj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163bgtvmpqt.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ulejcnnu.html

C#:   list.Count;
来源：http://www.sxryk.cn/163bfggjncr.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163innsvjow.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nxnznsaf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163oozoffwd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kjuwmsmp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dnetxtcr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jqqhsmxq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163wwtqweeu.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163enmdfnpi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fszqxywd.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163taeoocob.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vokqtizs.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163fzvxjtnk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163iscdlmsa.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163snrsorbw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163otnjmuln.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zgmapusm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lvdclpox.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wwxgreqh.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qysaznrj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ripuqnht.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163akzmonys.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lliowvym.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nzdxnmfw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vfasucdz.html


<!-- 参考信息 -->