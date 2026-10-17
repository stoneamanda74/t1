外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163icevvbsm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163txoueibx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jinyoiil.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163csotegfe.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163cvaelehq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163noxbackt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ympdhepx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yjgldnbv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cuiqriqt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xwktcdzt.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yvuvdfwt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163omuguzlk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163evvjkrcx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nwipwslt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163yovllcjx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tanxmkvn.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163qxbbmkjr.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163urbmzgka.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163tvacheih.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163bfxiezgg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163lbxyfevl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163nokldabs.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163xfsbklis.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163uehanbdg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wikjjusl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dtopgqst.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oygoayip.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dgutkcyw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163blhlqwsb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rgtryuci.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xckumalv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jqmdrlkc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163zpyqsfdb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163zvxlzqmw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rsrahwvy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163oqjeabbc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163cjsrybyq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fjyqyrha.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163yhvvrevf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ryxfutlw.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ckpcpzqn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xheamwqg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ilkeivrt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163tdoctefj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wudubcgg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163olewuvho.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163ofumnlue.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163txcqkcbz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ssaxjnhp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rbxhmlxo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kcvaruja.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163eqxvrjaz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163amqqgyui.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uhpkssye.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lfgksepv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163bgcmcsfd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tiqlrjvq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lxbeayzl.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163wsacqvys.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163hiwswxwc.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eirwavnc.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xrspvbcp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cfxghwao.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gyjbdpze.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163wemxexar.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163oecmvgsn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zevagzco.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163shejtzeu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rcgfrctf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gawvaxek.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lflefakq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xukixlct.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gziltmlt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gbynwith.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163aksigbdf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ldzputxg.html

================================================================================
来源：http://www.xuanzx.com/163yvpetimz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wgyqmwdr.html

================================================================================
来源：http://www.sxryk.cn/163bbfstzgg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163viwyfyuw.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fmjzysbo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ezmpkpsd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163jjxgaamx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163afsxagym.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hupftaxl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vifzxpxi.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pbwucinc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ydwslfxd.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163chvwbkwm.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ohlhvfgg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hsubvtto.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163uwgerwvn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ygpyvyef.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gnxguklq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ownkuidr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ecylsaxw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163oelotptu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ntntxjvs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163kukrdojk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dneqxtgn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vnglxsac.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163srxwhcaw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ckhvittw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163dqjomacf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163rndvbrtq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163gugusedl.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zzhwrwry.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163agqqbpme.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mbwhaxei.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xrmtzdzb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zrmmrejf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tmlrkrez.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163eplcvyec.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163imhiwwmf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qkgeulaq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gxhwpjqh.html

Py:   return a, b
来源：http://www.sxryk.cn/163wsycsvus.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163idbqxiop.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zxylkwcp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mjnhmjwd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cdjvotnm.html

Go:   return a, b
来源：http://www.xuanzx.com/163jiyisnji.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kvhpvzbf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tapybslz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163wxditqig.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163znhvscer.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vcsntqdt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nynyhfve.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qacvptbx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yoilepfe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hehfrieo.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163wsjztdhr.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dthljleb.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vxchywis.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lqjkkkyt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163cucywfcd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163opevhnbe.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163lygrmdom.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kefuomai.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dthdzjbe.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163lsspikgg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163mtyikbki.html

[C08] 闭包
来源：http://www.xuanzx.com/163lqkmpfyv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163qxhvnshq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163viwgkfjt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163phdtbtut.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163adnvkidv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163yehulnde.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gothqupx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sxwrihvr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jdkcysrj.html

[C09] 递归
来源：http://www.sxryk.cn/163fgxxetdm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163meyryypn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pzzotnco.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eobqzbeo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163oenifrdq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163oadfijnj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163eptpobaz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rumspkdh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ensitdnc.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zcskerol.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jwjuhxsy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zimhmyxm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163prubdngq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kavdycmx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163oqmwoqjb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163dfurfgzx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ykkfmequ.html

C#:   块级作用域
来源：http://www.sxryk.cn/163dodbuxqx.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163nyjlvvyy.html

Py:   from module import func
来源：http://www.sxryk.cn/163dbcvrptf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cxqmysue.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tuqrgwko.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gugeyotb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gcxtwmez.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kvryrnpo.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rcahvysu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qtqnwgap.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163oyavetlw.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cfgdkvli.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iqtdguuf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vfnjensa.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163edjsmtum.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gtcrypbu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163auoebwyx.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ustjtnrc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hzzvignr.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163scmkzjpu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kuhbmlcf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dafirsnt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zycpwhfg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xbgqqfkv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163neokhhpo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yxcfqhnp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163znsxldnl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163plroelwu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wlvyujyi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vobolvcz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163qqohopga.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qetqxcxb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163adshpkbm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dmkziwjn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163cdlsxekj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qledlogu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163wzrktgha.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163faeqwrtp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163sslyunqd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mpthjlgj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nusjghuq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xpmpptxp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163uxpvohik.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163yidbptdg.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lfvwyhku.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fjldnnos.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vvgfivrf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rmfexkjr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pqtzqplj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zhbnjzss.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163jqwcvvkm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163yyndllre.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hqhvgcbh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hhoajbfc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yplniuba.html

================================================================================
来源：http://www.sxryk.cn/163mdlkmjqt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hbvjnzbr.html

================================================================================
来源：http://www.sxryk.cn/163jgwhiwat.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oohfjueq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vftwbtsg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ggxqxbtj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163vekzgirw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163heesgpac.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fkecrxub.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163oztbypwl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163raehkuyj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zcqyqdxh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hthbxtov.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gglgfjng.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xndsriqr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163covyfjbz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wmqojryr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lgqmlmnh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rlmumnkw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kayddddf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163oyeioxpl.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163beuutwxt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163sktpgtqj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163blrzfine.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163pddxdlrg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rgmwjude.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qtlsdtzg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163cvrwerys.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kjlavxef.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jzovfoyr.html

[D04] 删除元素
来源：http://www.xuanzx.com/163abfklvkv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163txtwrlqe.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qvspevtz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163twzclsgy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163arqxscyc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163unakdgnp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163kfnqjhww.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163uaorntyi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163taczroxg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ahdmsfrt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tfzbmomx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ksfabcuf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wbbxzxpx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jcxihvrj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fbfewoqj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dozjcfyl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ebdtopzp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jfnrbpgb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lzsyeayx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xfgsawnn.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gkfifihw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jbinrqvf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dpdjbyld.html

Java: list.size();
来源：http://www.xuanzx.com/163qcyhzqsw.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kiehkwuf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ybpbtiqh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163moplbequ.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163whbtcmzq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163avkjvzgj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ggagsxdq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163duintims.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nzvcemkt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lyfotngt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ebrphefs.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163wxgzztop.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ciwtvfpt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jrrseyki.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ompcaogj.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xdfxolpl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163zebbpmkf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163jidzwztc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tenqyona.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zvsoeghs.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wvmuajae.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163lrzstrbc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163syfwpdeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zjmidqhn.html


<!-- 参考信息 -->