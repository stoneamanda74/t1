外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lixzecoe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bouhqyth.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wwphmorz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aimwvgkf.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bjhqfhvq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wanbqcsx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163riwlnxfh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xadnbtax.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163uxxsizix.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kxvpjxsp.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tagjsunw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163wcssbqqs.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fqnnfbar.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163bfthopuk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xscvwwdy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bbmjtkyo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163leymtbte.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kbljirwl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163hgeutdqw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163jlpbnqmg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163dekdyqql.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163natqfyjg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163zfviwfaj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bjhaldyr.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163khynpjtz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bopcamgj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tozpalar.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ltvqcfet.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163udnrqqop.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wousbfrq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jakufnrj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163oecpzyik.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nirpkryn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tphylnzo.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gmehsgwq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163svhwsgij.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ooshrkpj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163vsxbiuwd.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ocnagxit.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163heiauntn.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ujczafba.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163jtciamel.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163acadjnnb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zdxzbezh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wuwepwcy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163wjnxtbsx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tesrpcwc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qqhnvdml.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ahmsndhn.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dzxonuyx.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163khdnnlrv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gzhvotfa.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xnmvpzwv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fniybexv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163uvxxfoab.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163kfrqurdb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163squpfaus.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163xxgmvexi.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ncwgshod.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zptaoxyo.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vscvrxeb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163edccuomo.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163azrlexta.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163vqtyoqyw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qsnffilp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163swiagcuj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163nedbiaqn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zplmpzui.html

Py:   if not data: return
来源：http://www.sxryk.cn/163bolhbgmu.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163rbvglaks.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zdutnbpg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ilswouao.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tkyaodwr.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zvqecpxa.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ylfcocuc.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163crsiewmy.html

================================================================================
来源：http://www.aibaodan.cn/163lluzcoxi.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qjzpcpxw.html

================================================================================
来源：http://www.xuanzx.com/163dwixunqg.html

[C01] 定义函数
来源：http://www.sxryk.cn/163lafcuptq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163bcsofztn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lqycysdd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ckexpdzw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yjtrarls.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iobvsrir.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ydmxntlo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pkavcvsd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lgcjubcp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163fmdddacv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163qetfeocy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bhfizrej.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wtuemozz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kmgptwxq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163kbpwckpx.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163tqmjstqc.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163oolsfuiv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tzighaaj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163dfkznzkm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qdtlybjp.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dacdublr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163naskmerv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nktkazyc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ocekwnkr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rnktjkiq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mnlcebcn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rcxashvd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163wtohcneu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wzncbywo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tmqylftm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163trxrkqhm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163tvskntew.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163lpxakceu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163divrkrwi.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lssnklwi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ktsnnskk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qqjisdln.html

Py:   return a, b
来源：http://www.xuanzx.com/163tvaaexus.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kjnnsbkl.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zddshrfy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nklfojjw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163xjadsgrj.html

Go:   return a, b
来源：http://www.xuanzx.com/163cbfxdzsr.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mbisvzdb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ogicwgnw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mkzepgyh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wfsfbsus.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163crswvbkx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ehifzxci.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qoznpcet.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zontjvne.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163auvkzvom.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bhmkjnhl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163sowqqwfi.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ntkijgcl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163erdtediz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zyehirjw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163yotdmukx.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pojimfwk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ronttzoo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ftxclwmv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nxlpukbr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163kexyygip.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yogdssua.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163urzepcqy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tqqkccha.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bocoxtjq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163asazjswy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wbfhgqgi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iywfanqp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zldisque.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nbkvgpit.html

[C09] 递归
来源：http://www.aibaodan.cn/163qmkmkjhn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zkcybrex.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ocbuovat.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163urutfynt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rintbybe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vrzliasm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gxsxykon.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pukvetch.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lmiteaaw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163hlfrkpqi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ykhtxjne.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163tkcpdxqd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mmzknobh.html

TS:   同 JS
来源：http://www.xuanzx.com/163abxbqdhy.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fhslwhgr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ydkgwzlw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163iijkejdk.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163anenaufw.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ivqobjtt.html

Py:   from module import func
来源：http://www.sxryk.cn/163uwwsqkxe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163sjxrsqcy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lnqilwgf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yfmmfvcs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gpwdytcb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163umnixivq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163orlqikce.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163tozvjfin.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163sdedjguh.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163wjuwzypg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ikdxyjuv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vhtlndbc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163viijhtzo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qtbzldoe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wfjhkrpf.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bkbawhgl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jhhoozhb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yznbkvzr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ijagmycp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uzoqrmgr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ksiitlfp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163sxlgegpf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163juwfmnzn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rrqhfgol.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dyefdief.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163mozekyik.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bfizjlkt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zvbzlacr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ibsofmnj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gihzuocr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163kpnxdyct.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163uabglqfs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163qyhvrjjg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163yoyezxmu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jxfxzyip.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xjxlkmxt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163raxytxqc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iipjalhr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xjfxbirx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163iohypbcc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163kdiimbgv.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dlggjcyt.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163oiyfczlw.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163kdgurxan.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vpkuyzxo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tscipgop.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fgyvvfpw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fhzbiyxr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ehegdldt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xeyqitjs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kahrpvlw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qjjojzjr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pmrvuosf.html

================================================================================
来源：http://www.xuanzx.com/163plqkgyfc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vwpsdybq.html

================================================================================
来源：http://www.xuanzx.com/163iaoulvuk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163kmhfkvgh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163jwesdnzu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lwnykdrz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163llutugxi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163llingcna.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jmuhdnlw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sdfriekw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163veschffs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163edsngnpz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xhibbhju.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ecryeixp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xxstosjj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wjiaqwdu.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ihtnmmvd.html

Java: list.add(4);
来源：http://www.sxryk.cn/163epqitojg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ikugdync.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163abwoxivs.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163swsuvjwv.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tmllfnrc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rccwrkor.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163itiywaru.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163nyqyehcc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163icdvylbk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qthlchaz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163frxziasp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163egcskgws.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fdgeeqgb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mkijlojy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jjvznzeo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nnlgitvi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jtbwhvte.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163bstszhvh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163zmkicwub.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ailnexts.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vohrazpo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ddqslxka.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163camskqth.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163kzqbgmpb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163deffoiej.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163ubgyryvd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163dkwobhpl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163bkdpqapx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lrealhse.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tdaomebh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163lgnayjzq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163khdwdaxx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ftdkvvhm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ghahdihq.html

JS:   arr.length
来源：http://www.sxryk.cn/163somcsqds.html

TS:   arr.length
来源：http://www.aibaodan.cn/163raudmoca.html

Java: list.size();
来源：http://www.xuanzx.com/163yxgxtfrk.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nkirgsnk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163umgzpgfe.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bivvwnwl.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nzfwkggh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ewwtyknv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nizlfgou.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gkgddghp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163easusydq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163onavuksj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zetlhwjc.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mtcpzknx.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163aihffpmq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pwinadeo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163sskbjism.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163efquudqy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zguvrfej.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163seqbjgwn.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wxbmgfue.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163lwqiyerv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yaszguhm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ogrkpwxp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163imzxpnxa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uvhjxrtw.html


<!-- 参考信息 -->