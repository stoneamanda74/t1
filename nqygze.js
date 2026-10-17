外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163cyryoaoc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hzzyodww.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nexzupdw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xdosacuh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163slfmggzm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ukixivfy.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163inpftjeu.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163odhjnisp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163dpxkotvi.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ucojjvyk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qmcvonyl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163haucucax.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163bleedino.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163bweqqwqk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163jhalhagp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163crpslfgj.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qpsmlbmx.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163fqssqlin.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nzfartql.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nmiimdhg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mfsscehr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rnyhdgep.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ykrkfiax.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hrzwcabk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163emtpzwyc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zecjjisn.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lrsicdpm.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163grknxxhp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163kxrrlqpb.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gwqhqoof.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163etylghyd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dqybxzhf.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163gliqwzhe.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xnquikmy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163uuyutnxg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fzawujln.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163znsxmbkl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163padmeoaz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rebahqmj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gpzlupbb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ltjkirpo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163uvmvhsox.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vgkgobbg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ekmziwjo.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163yqomuviv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163chvnirav.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163calytlbp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163iaghwgwp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163etddptss.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163oafkuzwn.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bhohwavu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hpzhyctw.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hrxtogaq.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xizzmsgv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vufrnzkd.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dvvfpkor.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163qxaebaip.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ipofkepr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qtvvbrbh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163vssymlqa.html

================================================================================
来源：http://www.sxryk.cn/163ttbtxzon.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hvpmdwom.html

================================================================================
来源：http://www.sxryk.cn/163zcmgiutp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ajafuoio.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163jnkfrhni.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mjdqoxnq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kaoyfjfr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lrwnnent.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iladudyf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hbwvwhch.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ybhpftwl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yfelvphp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163verxdxox.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ugdgflsr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163eqvztfgc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mlgcdxzm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bjetwmgd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ychvroti.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bkgmxnji.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xdbrhkzu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mcexirtb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163rotgklsr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xvwnocpx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ivyaxhby.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ogqxiwam.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163xcpamkiw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qfhpcdps.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jevjbonw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163yzeqxhfb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hsydviyz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vsqnmkir.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ueomdqfu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gmsekpym.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ywwsbdhj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mcracnjt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mkjwrtmo.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163swedbsku.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163apbytlwo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hafhdwof.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hveoxntk.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zvzjpjht.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163reazuztk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ecvvucqr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163csomjfxp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163sluctufr.html

Go:   return a, b
来源：http://www.xuanzx.com/163jcutpdbh.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rcgkkfxj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163lejvfhus.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163iquyaqmx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ckaofuoc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ruqvguuu.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163nmmrophd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ndgxhxen.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163zgjwwrjz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ibgwroxj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xslybbuv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ovhctknh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163clhtrapx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163vcisdolq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163hjkyekli.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ajbrnuos.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163oizcyzyd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ugcpzsnd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163tnjhexqg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xwhjdewi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tiaojrzg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zebbwbuy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vqlxfjkp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163glfbjgfh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163daaeljyh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lpvhermf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163kadcsbix.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163bgtikaxs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uofbvzfw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pogpfpqe.html

[C09] 递归
来源：http://www.aibaodan.cn/163oyxiekhz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163atunlqzj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163zihaxhdr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163irvhsngt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eqtdpqym.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cuzpqvfo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xmscgkkb.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jybkoqij.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163yncnmonb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pzeyawxd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jeisxvzu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163obbgsigf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163altahtys.html

TS:   同 JS
来源：http://www.xuanzx.com/163bufhvefr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163kixgnwvf.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163pwqybzlx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ghkbcmvy.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pfrigsxv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qjpbkils.html

Py:   from module import func
来源：http://www.sxryk.cn/163mclsqimm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163alzcpmef.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163uerpslre.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vulhrpgv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cznhheeh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nbhxrayw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lujzhskp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zokemwxq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163tgufyfsj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lfkzcuks.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kzeanxpr.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bspshsqd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jumptiym.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163pfphgzlo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vsbjzfei.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yylettfk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vleeuulb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qdyaoary.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163prqdutnp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163afaeqyyv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gxxpjyho.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tzlzxlcu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wnwpegzn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xphpfrzf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hdoodwws.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163poambkhm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163dltfkemx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lvqzyjlu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163llmwkpxm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wnxujdqf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qewdzgvm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163giwudbmu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fipzqfxo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qylfxvgc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ctklesta.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rqdsrjnq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jkjwnmpi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bcmpzmto.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163wzxgihao.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xouynzlg.html

Java: // 无解构
来源：http://www.xuanzx.com/163smtlzhfy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ilxtusay.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163losqmtkq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163mkcggcip.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ukgpuvvq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163mmwywygt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163crrgtrhs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163smttmrvw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xmeegmbl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fkwfqrjt.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wtpjwfpa.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jyvzrgcr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dymutmbx.html

================================================================================
来源：http://www.aibaodan.cn/163olkujkza.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lipbmqmi.html

================================================================================
来源：http://www.aibaodan.cn/163zmghguuf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163tplraemv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163poobirsk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163fmwikhin.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bjahewct.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163wembhpwf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163taqckbqr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163twfduziw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163soujzfhg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qximwlqq.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163sroeazyz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vupobfju.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gxnvcowp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ymitfgno.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gfzqksej.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dunuqgcw.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zwdacwoe.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163dsdleekn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jluwqehm.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163azcytmts.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kpovqgtx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mlialeff.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163dsbunalj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163mvilkdsp.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dntueaoj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ehgnadqo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qdbovvzf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163apwtegzs.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fvtartnq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mkuobdod.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ugesbvkn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163wbxqyzmb.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uuysntje.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xajrxjjo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163htkbxqib.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163neycewzl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163qyrlvpqi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163cthcaomj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kjugqecb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zcdmqdet.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vwaxnwlj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tyyltumb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wdqptluy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163giowazra.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ghzpbubh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lxadjzzj.html

[D06] 数组长度
来源：http://www.xuanzx.com/163luqlxkkk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yifmulos.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zjnwzmtn.html

JS:   arr.length
来源：http://www.sxryk.cn/163dhnmtvzb.html

TS:   arr.length
来源：http://www.sxryk.cn/163rrqjylhp.html

Java: list.size();
来源：http://www.aibaodan.cn/163dgzmmkim.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aykcoctd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tvqhitbs.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zvtdosdy.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ugmfsxdy.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nbtagenq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163mmmzuopb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jvpfuahv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163citveock.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163lgaquetb.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pyctmafk.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163urlwuyob.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tyllhpll.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163huuwwdfq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163aavswjkh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hoeehlsm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163boipspyz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ogokguxg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ztoqfowx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163oydeonev.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163aylmywly.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163nmcfgbgp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163spmbouyr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163vnsrjkqp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gambuscp.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163sfsewbud.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ygdjkmfh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163hlohpcxh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163yvhvgmds.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163obmbgnbw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163duuhzqpx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163stuygnhg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xhgsuzsy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tutvolqu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tukdckfq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163pmnfxbqt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163clmcyaqu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163tzixywtc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nifqfdti.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ovlucunt.html


<!-- 参考信息 -->