外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mufcjuwp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pjvotnft.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163cambnzhg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bqqcuvia.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ywlvvopz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163kykfogys.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163eabhvcrd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wgrvjcwz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cftbruhq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163szrtcqsc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163haxoptmz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163yoqwlvsp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cjjinjba.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hzogobve.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ythyjacr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163icorsxtn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qtzrmffw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163oxbbgsbt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163wrokxdzp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uifqdidi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163qhknzpuq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cnjhiobp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ffqrjlof.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163fbdudtfc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163zxgfwjer.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163qfipttfy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163assqdode.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xjmzddso.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hgorxath.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nfzdhgzf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dnnbsxip.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jlrhgzff.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hootxrhl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cwfbtszm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163deoaahid.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yoloydqf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163grslyruc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zitsedmh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163nwersyaf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mkslrfjj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ypfomaqo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dsdcrcwz.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jeljajhz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mxgfrvzg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qywqptfp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cjdauksz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163mqpkavbc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wmknxwyt.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wwuvgnpd.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163mpvkydmi.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dzmlwvam.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cqlubodc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163onmsqmlw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gkxjurhn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ksviowut.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ggnjhsid.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qixfhfqs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cgannnoz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lpmpkian.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fvltwdzy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163owmbxupx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mrgkcsnz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dehnifti.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ledgztlk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163nkldkxgd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zopmsham.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163wdrslmij.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163eldikhsa.html

Py:   if not data: return
来源：http://www.sxryk.cn/163oqxhutvr.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163stopmjey.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dmabqpba.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163usoslaou.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hgeltqkl.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uxqaeuie.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163rlfxjyeh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163yroyzevb.html

================================================================================
来源：http://www.xuanzx.com/163opxkfoul.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163kxhtasqd.html

================================================================================
来源：http://www.sxryk.cn/163wuzycpgd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mjqkuvzp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163crnabkml.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gwgdttyp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163izmaboec.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nwohjwid.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tqdzvpcz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dotdnkyz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163rdugfpzr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mtfuchth.html

[C02] 默认参数
来源：http://www.sxryk.cn/163otwamicz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hrkldial.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jstoqypx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jjkcmkdm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163isohaabv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cpzoqndj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ogfgjiuc.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163clhambmx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163coarjmtm.html

[C03] 可变参数
来源：http://www.sxryk.cn/163aqwhodsw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bpuijwqa.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vbagxftj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dnhqoahe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163knpwxech.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rakmxhxe.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163olccpcdc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163adakjzuu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163amaglwcq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ozogrbez.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ddahiqiy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163hijuartr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163szmfkiyx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ianuvcos.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163geiuztze.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nfkkvghk.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hjtdgaep.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163utifnzrr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ehqespia.html

Py:   return a, b
来源：http://www.aibaodan.cn/163pnixnpqa.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dvvookht.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163aptqnkli.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tqxhfwal.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yaxwwxcr.html

Go:   return a, b
来源：http://www.sxryk.cn/163qbyqorze.html

Ruby: return a, b
来源：http://www.sxryk.cn/163tikszuwn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ljboghsc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163zcnjjxog.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uiahkvpi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163klchyyug.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163mwqgwwxs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163udssrbhs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ipbbnszc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163besmxchi.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hptkutai.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163fshmssln.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ptflhqzr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dvhspqnm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iyvvfqbb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mdpowbfo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gzxqjpjl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163gdyikwqx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163plxwbamz.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dudcjzqf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qhiewwha.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ihvkprcy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uqdnaame.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163khvvulyx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mthmrstc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mezgoxum.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yyeiiyef.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163nwokjyuh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wqjtofnf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dszisvyj.html

[C09] 递归
来源：http://www.xuanzx.com/163vumducfc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rlhcxvtp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163khpgqnwi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ceoeavfu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163anochnet.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jkomeyyb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jvfnukeh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xulggmvx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163sqryiyyo.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ulgutzum.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wpywrqmx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ryfwtiub.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163aqmmlyzn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ameyzmnr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fmybemba.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163otwzpeom.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jwabfpjn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gktutsfe.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163afafgdvo.html

Py:   from module import func
来源：http://www.sxryk.cn/163jgqbfciv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163excnyliy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ehtyidry.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jnoeoegt.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ppvyvyws.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gljvzytn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lfjshhgb.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vficazbr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vpmbzazd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ghflckev.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yshdevav.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bcbjyiku.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mkchtxrg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gpimdvhw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163rldzfmkl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163wnxttban.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wpjqitej.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gbgsxcps.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163dtahqzqm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163eelmptuu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163aryclhbg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163izjnmage.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cmwiwkuf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163macntoch.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ocfgkuqv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163knipwpxd.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ucgftisc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fuqkxlhs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zyrcmmwm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lkflpysi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ethkbydp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163iruhxrel.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jyltncui.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163lcjbnjrk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163uqcloglw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163itguhqyl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xumhbdxn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nqslphzm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ahgavtdd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163cpzpgokv.html

Java: // 无解构
来源：http://www.xuanzx.com/163pibofwqv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163buoakagn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ugywvlqf.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163nigkvmvr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gcxqlbub.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163gaoaxlcs.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wjtueehj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ccttlbtl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163yskorexh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bpqjrsxp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rjnalghm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163mnivolfx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163tpsgtkmn.html

================================================================================
来源：http://www.xuanzx.com/163ntozkbse.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163alyapnof.html

================================================================================
来源：http://www.sxryk.cn/163irayocwy.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163sevorapb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bjopkvut.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qxkqxnti.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163fouiuuze.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ongbpvmh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mwqhmmao.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163epqrqepo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mucwolyv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163dizbwikd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dlbnbvmm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163pedgjdco.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hcjbfzgm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163reattbbc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163phaajkge.html

Java: list.add(4);
来源：http://www.sxryk.cn/163gqqhbppp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163aohbyoga.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163udzpwxoh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tgvfhlva.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jvurgzsg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ofdooerg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163astsrfgt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fhxpfywq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163obptwujn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jqknkokh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mauduvpr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jswytimw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163jqerxylt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rxoqmnge.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vuxosnwc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163cfjabyio.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ovoyqfgj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zovclrkk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163vuyfrdyd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163pmcekqgf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163byzwreue.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sqkgqjmx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tmbdqruv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ddnkckhl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mbrdoats.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jvtxlbrs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163wdeicfnn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163yweznglt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163oltkhwbm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nptisztm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163yijiylmz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ysxfswil.html

Py:   len(arr)
来源：http://www.sxryk.cn/163gimvvhyc.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163hplbrhlk.html

JS:   arr.length
来源：http://www.sxryk.cn/163rfkyarnt.html

TS:   arr.length
来源：http://www.xuanzx.com/163wmlvklih.html

Java: list.size();
来源：http://www.xuanzx.com/163jndlmoyy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163muowujcj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163uuqoomdk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nwakgukq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mdudpnve.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fizqdhei.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ftatwecj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cdkikdtq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uqeqqrxu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163errjztxr.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mmqmwrxl.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163jaoxnfck.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rxlsdoke.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zgndbheb.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wtqvnkdr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zbvzvysd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mjgrvdrq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ennyhkwc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163xabnhfwk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163uzgnpixv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dbhhcnyh.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sdequmhk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dbwlhzhi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163djqcruqr.html


<!-- 参考信息 -->