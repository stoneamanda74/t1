外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jjsrrbmt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163tibcoizy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163eoqdxnos.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163dwqulvyh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163eesrebyd.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163cntabttd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163qvukpexa.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163agqzpmel.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ylxnejla.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163sztxzbml.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bzqgtsyn.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163hzduyndp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pehfyrtl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ceqqsesm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cibaubtn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163uuloqrbb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xsuxkuwp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eumuawch.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wyxqrvab.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zhehjyxg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163eyhyfuwz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163snmzfjik.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163sgeurluo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yqtgvtoi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163paqywyiv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163svzkovls.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163kzvprham.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rgqfdwfk.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hkwbdcww.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163dbbikpmk.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163dcsgonnq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ioqatwht.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163grsmuwfz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yaamfjwm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yeadwffw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wuhnsdnl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cqffazfi.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163duzqzqsc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fuyofuxx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gpfgtqwc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cvvqnxng.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lgfgtmnr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163nhnpszjl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dgtyecbj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ygvpyrne.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ghwgdjii.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yiwrseof.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xfkavsfr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dovpdhqb.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163phyclghr.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163clglespq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ttxrlved.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163usarkgqz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jksaqesv.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ccutcyww.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qpxviths.html

Py:   if not data: return
来源：http://www.sxryk.cn/163htoxggdf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ucfnxpdo.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pcjvycbv.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qexvtzbs.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163upnukubn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163xugboqda.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163hyuskufb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163imnxbhbm.html

================================================================================
来源：http://www.aibaodan.cn/163icwuuuqr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163rllofgmi.html

================================================================================
来源：http://www.sxryk.cn/163hwyvrigc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163thowrmgv.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xgtogiwj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ujamugsi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dodbqpih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wdyelkcx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rknthiug.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lmuqxgcm.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163irjfyglx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dognbfwl.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qyynngco.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163oameuwzi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eijednpz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qoetussm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cfdnpggt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163zpsgdbhx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163rswzhznx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wqlroppl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ikpgqesl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dugrtcjo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163uiehinoh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163gpqwqoao.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cdilevdb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zebrhowt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163nhcsilha.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163nmasryfi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zyxtejsc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163sbuocxiq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ywjkkmke.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163cxeryvod.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nkqtapcs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163blqijvqq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163dmdcaqel.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163heyymkik.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qgsvctwf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kyfgkwdy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dhsjiooy.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rgcixvbd.html

Py:   return a, b
来源：http://www.sxryk.cn/163bfkxwoaj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qlstaeax.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163mibiuwhg.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163obnpyype.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vtqivbtx.html

Go:   return a, b
来源：http://www.sxryk.cn/163tedhtipd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ymmcllwg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163npxdfbud.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163webpumev.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gpzaznin.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163djnqrzug.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xolzdzlq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163gqwmybtf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163kpzvepwi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jqwjgkvr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163plszgsas.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ffmszhnp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163adovnboo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nxsytzsm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gvwdvngm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wbnhshsp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ytxikxnc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163njsqzgqj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163boqjupum.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163qwgwlxkt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163vgcfioiw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163unnkyjhj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xwtaugwk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ntnudcku.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ukeyifmt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wdpjhxwd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yjfibbst.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yqevrnkr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zslgwmdb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vmafcdhh.html

[C09] 递归
来源：http://www.aibaodan.cn/163ibcukbhz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163veobzpso.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xrxkeali.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kiswrqgb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mkyafqry.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163prjbhbem.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163kdltnlgf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lffcyhjb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qawghpbg.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163pzprqsoq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bqaaopil.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163bgkuosxx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hurjpopv.html

TS:   同 JS
来源：http://www.sxryk.cn/163obycqxqx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wrdjkslh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pdxmhrhc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163lzggbbmm.html

C#:   块级作用域
来源：http://www.sxryk.cn/163jgiujcev.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ksosapka.html

Py:   from module import func
来源：http://www.xuanzx.com/163hrbmxmsk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lmfdzzzc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163mluwdigo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vapwhvdu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ujzltucl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ehmhyruf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mbsxzlbt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rvgmmxzn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dbxjqica.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kdbqpywa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163unmcgopr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yvshxvuv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hpgjkuye.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163iphhhgzs.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163tmrewsfy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xpvsbzch.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163wsgwgpna.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163anbxlnzu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163uwvbcnpr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uvielyqc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163byzvegma.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163heauobto.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eriixbqy.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163krjakhej.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zdfufpkd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163sjycyjjj.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bauccmpc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fqckpjhn.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fjtirbvj.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163upgoembd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163urculdmx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gojnrtlf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xuqvbghh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ddjddwzc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qycxfswo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163xoftysda.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gizovxvj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163eznntxnh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163axxwmqfs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hhcounri.html

Java: // 无解构
来源：http://www.sxryk.cn/163nlangbgh.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hdjwejyz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ydrkzaqb.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163avesrsfu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hfuttkwq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163stiilqwb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kthuasjm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ztgnchsh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ohzmeokb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uejltold.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163pwlqthnt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163cfrkjgox.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163divcuvys.html

================================================================================
来源：http://www.aibaodan.cn/163gmjbujsj.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163puxdhvgn.html

================================================================================
来源：http://www.xuanzx.com/163zyqmzsaf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qukopweu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163tjzvrwfa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163byugpkgr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tkggvbgk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uzmccsxa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iukbvpxd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163naqbwfsw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ztsvjmgk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163gadiaobh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bwlrggjt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jnuhlhjw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mpvxlksn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gsdosoaq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yquwjshe.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uxuvjxjy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163unjdslwd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163zumjdcws.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163snrskbeg.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mwyscnsx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163yuxxktvx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163olhswpyl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ffemikii.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ujrhiisr.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163zbjsdgca.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ctmbhgwh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163rqxjoect.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nszrgzqw.html

[D04] 删除元素
来源：http://www.xuanzx.com/163inndtcwt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163spwkgfdi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163oyyqrhnl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xgdwlxbg.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qqcfhcml.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163racorgyz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ahmvazei.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lglppkaf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163sryneyqj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jxuzxfyy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jkmuhczq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ymgydvcz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qujptidf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163bpnpguju.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vzebzgvv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163bqbsrrob.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gdeahyhq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xnlopumn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dhnwmdzy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pguzolrx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163worbpokk.html

JS:   arr.length
来源：http://www.xuanzx.com/163uvbapocu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163clrlvqzo.html

Java: list.size();
来源：http://www.sxryk.cn/163hrcamxxi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fgsapnwm.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zlsvrwbc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gfaygvax.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163hgmwiuzx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163mcvsnakd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163eqjzfyoj.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dmvrfjhm.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163aurllljj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163norqlliy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163wifftewo.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jwexisiw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163noofxqvu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163mfmmxujr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163avuhcigx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jxqgsfky.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tsfwoekc.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163btdwaqmq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pifmkwvw.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163uxnvxsqd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163dyamtxkm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163khleosjy.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163iqsycccj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tmxhyydc.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ppengebw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nfvlgqou.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pwmryelc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wwuzmadd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ryyfgybn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zfwycnei.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qoqtgtoo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wykjpvty.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hoqwngri.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kjrtbyiu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ysaodibd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vgvqmtmf.html


<!-- 参考信息 -->