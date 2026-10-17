外链999!wailian999！

[B09] break 与 continue
来源：http://www.xuanzx.com/163wybtvsml.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163vtelwpsx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ietcwetj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogzvrsuu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kuqkbkpw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dvqhopbx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163tlhxinuf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163nduwnhff.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zlvcnsus.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vjgkirzg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ibazjtju.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dbzfsiia.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163mklyepfy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rshzjzpw.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163eccfimpm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163odsshoes.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163dkjbwqwe.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163tuqybjab.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163oxmkorhc.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ldlfijoy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jkgccvcv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gfolwfrc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kvxirfvp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163byuofevo.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163egdnnfnq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163cswcivaq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163callslnh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163iqsieqkf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ohpltxlq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163dcadryjz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zfwjloar.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163taukqeop.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sdrlykxd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163psaufbiy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zoyfhlap.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pfuhlblu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163cysbzpve.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163aborupcl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pcrufubi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163flfyrrff.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hgjbfzhe.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163oakkitgc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163duwyrhib.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163tmxxsbzo.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163igvgokcm.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163avrhvbft.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163rvvjsrpf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163llcnpabr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fjmtyheg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163oatiewfa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163hldyfjlh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tkpoadxh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kycigber.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163lvydmppy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163bpaukcep.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163mvjtlbew.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ohwicyyx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163bchwyzrh.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rnevpiqe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163sclygjxt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163txlathsr.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cbxnvies.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pdmwkvxw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vkcmbdcz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163duvmboqh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ckzkfhbo.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pqnqadvi.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yfgjfsjy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zkackhnp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163skbonuuv.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vauzlvym.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163abuyatww.html

================================================================================
来源：http://www.xuanzx.com/163palqchrl.html

C. 函数与作用域
来源：http://www.xuanzx.com/163vkvlmrww.html

================================================================================
来源：http://www.sxryk.cn/163wvouqfwo.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163pcqljpvb.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lqzmdpqk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163adentozj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ufyuwhxk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ybujbtiu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gpojbanm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dzyltzye.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gvluakzl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163anckffgi.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uswvjmhe.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163nfxfwdzh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163zdpucgdh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163llxpnjfg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163eqmpjmfz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163iyactyqm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xtpaixyh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163dsdaodox.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jbiytdhr.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kxcefupf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qylhuopu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fgtzglar.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ghnzdhrd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163viqpnhwx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cfjlcjcd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163cldorftn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vblojdgx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163aqftbkyh.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163zmvuaanv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mwalbkxa.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uzzxqtoz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163smududxq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zxmyowhz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hpjdsnne.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163yuqxglfr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mcclcecp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163erkreofc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fmajkfjm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gxgzsoav.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163wfjxrqgh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kqkrgktq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163knepggwy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163prldegyp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163idxpoksw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fwfhpgjs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jjgnuzlw.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ubhtzyhx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ozvedgft.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wvfgagfl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163oznptkxa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ouiwujnw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yydjdojc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vhdmfria.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hjuydtcz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gbevdkvh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163oytnklnl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163xymripiz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163skfplgud.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163huhrfggk.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gsvaiwxp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ceyiwtmj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163skgwgdok.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tjbymdax.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vilvdtpn.html

[C08] 闭包
来源：http://www.xuanzx.com/163iyuldnqf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ktritkbt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hlodocry.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uelvekop.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bwoyuriu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ucuwcivd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ccszloly.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mdqidzxa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163llocxxml.html

[C09] 递归
来源：http://www.sxryk.cn/163vtocheoi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vewuwxvj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tylemijy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163trvhjhmu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gbdkcige.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163znzkcypv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nidoebst.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163srohevsm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xnamcikn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163irovxphm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163whynqkps.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ckaxhpzq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xfunmaew.html

TS:   同 JS
来源：http://www.xuanzx.com/163sqehbvkg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dcxtugde.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mheirqst.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dhljhfih.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163oacrdbsd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163lwcrbxap.html

Py:   from module import func
来源：http://www.aibaodan.cn/163aczftsag.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dyszfsnr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163jhqxhvzu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kpsvqoxx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163shupzcvy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163fuduqhrm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163wixxzyao.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163jlohecnj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bwxabuwy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vmjrrfve.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163inzuxhxa.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hgjjqjmo.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pvlkmzak.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163saqmkpub.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163pgjxspaz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163tnygcelk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qckgcvrc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fzjuydai.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163bgthamzz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vdsggdpa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rytlsqnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xdekltlz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ugviupse.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163lvolgfma.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ubymeygw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yptmchpt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ubknplgk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cygdinzr.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ghtmxuqx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163viehpbar.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qganlooh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zbohvyjm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tvoaivma.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163udputjdo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nghbvdtp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163skgvvmlg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jotmarvv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yzswouwq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163asulofcx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163yvceutws.html

Java: // 无解构
来源：http://www.sxryk.cn/163flhgjoqb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fczcrbwc.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163otcaikhy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163sgywimnh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bpfzzhvx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uiksdfyk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ekisxdtz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gjbfyymw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ftwojzdc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163reikmchf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ygjysjva.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163apfkpgzb.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163cmdecozz.html

================================================================================
来源：http://www.aibaodan.cn/163tffxtlso.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jatlvlpt.html

================================================================================
来源：http://www.aibaodan.cn/163vxxutqic.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163aczybzaf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gqhxvibx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wgiywcpy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kvbceurp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pjbyixkx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nqkfnhmy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163bbbeiqke.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163oaslhilw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163szszajnl.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163cvculawe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wuqnlcjs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pcafwktc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163uiakogwo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ryvazfzp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xleucguh.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zyejfdun.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163gtznftaz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cijemefw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163duuhlcrh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qalbpatd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163wjakthib.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tkzotkrf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jagespvj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uxtnpfmr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xlhiwbks.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rguzdepz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nbvgcurw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ntjeioix.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163toxmzqwe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xixdsfor.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cngkkdhq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vkwrqryk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bjkwdqvg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lwcecgpv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163nqlszjhw.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lplvtuio.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163veaeolud.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163oovwothw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nmqqsmto.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163smqlzlsy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163azplzarg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qkfyxkwx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163qitdtpjb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tunufapm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qqjngwxx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163znpwrbfw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sterztsz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pmyujqdk.html

JS:   arr.length
来源：http://www.xuanzx.com/163kcdmsgmp.html

TS:   arr.length
来源：http://www.sxryk.cn/163fkagzhcl.html

Java: list.size();
来源：http://www.sxryk.cn/163ogblrwbw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mwhxgzym.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163apjcbenr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vmikvwnv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163smtghqai.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fcwonzpc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163yqvxsrnu.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uxhgcgcy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163spiyllmv.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163rudiufuk.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tgcagaeo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163isecaeva.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xgpaotea.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cochjhzs.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163thwmwbhl.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163suabkngd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mjzjgclf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163iesolwom.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ohtihefv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kuqefbio.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163rhsoxzzo.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163xkdyckgw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163avqbshqf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163riakagih.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163akrekhkl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163nrlbfhju.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163gqhvybax.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163euxppfkv.html


<!-- 参考信息 -->