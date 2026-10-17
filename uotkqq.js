外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163vbujrnni.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163cwgxutro.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rlwixgoa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163fhpcbsii.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163elkhjras.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163oajzpvah.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163unpjdvhf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mzcbanrj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ktkotguo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163hlxiyqcz.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163euvflrit.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163oengovhe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163spqgdbds.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163iejgxioo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mzmejcwt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ofrpsvgh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163sqmhinrf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ptrgbjaj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nrbqlcwx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163iaoywwzu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yhkonamb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xirknrqx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163gugqhnka.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163vwqvcwvu.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163vhdkyltb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163itrnbllm.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163refxoeux.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zptxkmei.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163tiozlhou.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163qlxvhpgf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vdrzrdge.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ojktapyy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163rcffgouu.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163uaxcwjhz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163euvrwkbx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zycxaaue.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163oalzgory.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163pvdzgwqd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qhqjifeu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ynwvnqre.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163eglfpxrc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jekebgof.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163sijkungm.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163klnskajf.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163idnyxnsj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163plwuuhar.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rlegwfxr.html

Java: a && b || !c
来源：http://www.xuanzx.com/163jzmldcbk.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vnyjyhkl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cimnzfap.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ocosthup.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hfhcrqbz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163flcijfyd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rjjxbdne.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aspdedyk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mcxggfzs.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163osuyzzdu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163aovvmett.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xlxmodln.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xawbiamc.html

================================================================================
来源：http://www.xuanzx.com/163nmkzjedf.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qlchbxks.html

================================================================================
来源：http://www.aibaodan.cn/163mlrhmror.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163adqhxkar.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163seuimrll.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vmqrqewc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ypzaumww.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163offiffcv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jekgktxl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163sdpfnxkz.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aboqqgjm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dbzgxqif.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qiifhvzt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163zdtkqjlt.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mfrszovq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163hjjpnixr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163zblgifbl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163arzybuke.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163vgopftlf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wekaazik.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gxsivdvw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mittvbgu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163dxtrynoq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yfntkyty.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163gcvjkhgs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ughqkmwn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163uhkcgzio.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163tsihfflk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163znoskezg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163filhvxou.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ocyjlegz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163exkmycif.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ueklybyn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wkwihxop.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gemholki.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ashmfyus.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ihheldeg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wldcaqyj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ymeezifr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jvfcipig.html

Py:   return a, b
来源：http://www.sxryk.cn/163gyghvzjq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163txbsweuy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163pzleffdl.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pdmuevyp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163wtoicngj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qpldsowv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hqkomapr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qqwyfvvp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163erkogalu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163buehzrhe.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ehshyyjy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gypavfsr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lebfhled.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163rprgkvcr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jxttiqok.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vidlpmmj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kchbubep.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bkpzoerf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ymdwrsev.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zmcsermm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hvrperox.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163lbjpslde.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tlrovvvn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ijqfclaz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qtgrwcdz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rjhvlcpu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fityfevf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163flfnfsah.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163epvkczmv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mjdfhgkt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zzymwxep.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ftvsgypo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163melvljfb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ofvkjpxk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hxmdlums.html

[C09] 递归
来源：http://www.sxryk.cn/163tclriqjd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gtljtist.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163izytkxuz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yicrejal.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163eecqreum.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163krbuqsot.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nnwlpidd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qdyweavk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163uggiaiec.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163thfhluhj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pjajmkvs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163twtjofkr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163lhfiujlf.html

TS:   同 JS
来源：http://www.sxryk.cn/163icjbfiwx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163rwamggxh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163oumwpozz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ejosfrss.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uffeefoo.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163auimfacn.html

Py:   from module import func
来源：http://www.sxryk.cn/163uflyqcec.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163folwehld.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163aluqwaap.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vrdnpbkd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tbbgmycn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qxufdcpc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jzaqngic.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hwozfbhp.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163nwtdxlkl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163vkdzaktw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tyklyphq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oxknchoi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163extuqvsg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163eixjthuz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hxeyjlfg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163usvpyego.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163caxatyxl.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wqzwrdsj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tnkpgphx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cbgeylyt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zeellmhz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163viddukoe.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ngdkhsjp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hfdzxkej.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163gipjlpwb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vxxntycn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zvcfnjer.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163glfbumuk.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xgevrzkm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ttydiyvi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ylqujgvk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tnljvvot.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rvgynbeb.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163pmpknaxk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163iafmxzdg.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rdkigvbp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jmtyqrhw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163jxtwjfoc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yaxrxatl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vypdqfyy.html

Java: // 无解构
来源：http://www.xuanzx.com/163pktplqzw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163inmrwnyf.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163uzxiqeho.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163yxluizaz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163cxxsnoxh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163cfmijacz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dsdfccrx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jlfukcac.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ewibwxkk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ndkckeix.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nzyvgwdk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163fkjvtlvk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163djsfpqyr.html

================================================================================
来源：http://www.sxryk.cn/163rycsyrbj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cbqbzqiy.html

================================================================================
来源：http://www.sxryk.cn/163qbgvoazd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ibcbfvkb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dyaawcvy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gwlbsvnv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163lxrzjifj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mnkevtca.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163mklkxbkt.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jyjqxfxy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163slaklsvi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163shqxntom.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xouwdcsl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ogxhpbwn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cwhukevj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163icupvauf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gqejgxbg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163pxjxtmrh.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fwgsnrih.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tperwahi.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ovofvldb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wpamfonh.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yrabeagh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163abekswts.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163weazqxef.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163nivxqfgs.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163pmofpdep.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163voqdjxiu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163scahnrtk.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qgkrnkvf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163dauvoqzz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163arvenbta.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vgfauzvb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163leagvubt.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ghpjujim.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163puvuqxym.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163btzxmmar.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ugwxsdcw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bvasnyid.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kfbcmtyx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pggqafnn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xayzqpim.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163pznbbgjp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pdkonryq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xvkeztnr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mitorycv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rhqmzfzg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hzbkzsbx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wwerfore.html

Py:   len(arr)
来源：http://www.xuanzx.com/163rtctybaj.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163gspfqana.html

JS:   arr.length
来源：http://www.xuanzx.com/163jrkwwosc.html

TS:   arr.length
来源：http://www.xuanzx.com/163ozyohdun.html

Java: list.size();
来源：http://www.xuanzx.com/163ztzidklw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hlgxywyv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nkjpjdni.html

C#:   list.Count;
来源：http://www.xuanzx.com/163dlgimuki.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cvpckgun.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nejahjkk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qmtmngse.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pdshvcsl.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163znttdmvl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cupveqxo.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kdjijwmq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163qqpctwga.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163avncarvx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yvweomag.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163semdewrx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zvzldmyt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ofdueqxr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fpnbppih.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ysrokere.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163aaztxkzx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163qoxpuqag.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163usskxowm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163sfdxrswq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pltzcsrr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163klrsxrpo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wsudftlu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163pxgyoppn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163eodrvsly.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yhibegax.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xvtjmkwq.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163axjjwkhe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mkmymjbc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zyvrvmiy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cdnivwvo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ugxjgvhk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bnlzqqvs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qkozwvdj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163emmqnweb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163impkzgcv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wgonysyg.html


<!-- 参考信息 -->