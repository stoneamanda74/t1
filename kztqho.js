外链999!wailian999！

[B09] break 与 continue
来源：http://www.sxryk.cn/163scgklrkl.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lhaghqqe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163tqpbaska.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ejhdxmza.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163arfpiphg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qcjemzoj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ljefhjzj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163gzfrhldt.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163kcftgpal.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163hfsnvcrn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163crtykgyc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vrjkzdeq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163tniqctxe.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kekqelfu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zchzliwl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163sjxdztrj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163cppbeisp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bduxyble.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ahzogzru.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163jfrjgnja.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163lehekzzn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163znherkos.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163xohoddbm.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163xyxtbaei.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tvwwbwqy.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pqclmbrl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xorirjda.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163stjomkxq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163icmwmnjv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163hcipsmui.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rqrksbkc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gnskxbfk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163texucgom.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163qccxjext.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163subvgsxr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163cnmpqthe.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gduwaofc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163gjptxasw.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163dmladozp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163sqnynhxp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wvgkvkbm.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163yhjeouez.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163rlvechej.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163jhprnzgx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nvxivtqu.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qltlgivy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163wllgcbbm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163feapliwv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mwojvnry.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163whrgxxbr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163djxlmzlx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ughtctww.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dnnqnbht.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163rbsexfpm.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163saejhojf.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163rlnmkrch.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163nocfsymj.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zvitluxr.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163icimvuqs.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163azmliccc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163pxlubhxm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163owwdqsws.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fzfdccol.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vfyrpdtm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163uwmgatui.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163hvryqunz.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163jkcchllr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zkunzflq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163aslsimio.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kpixweao.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fxqcbtga.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vtkjhbyn.html

================================================================================
来源：http://www.xuanzx.com/163lupwxqtp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163snzdvwav.html

================================================================================
来源：http://www.aibaodan.cn/163czlrjjvj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ihsohvlg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163lihzoowi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ltrflzqd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tpkfcwry.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163moydemri.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uqwqtrvk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jdkahnsj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163veijwbog.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qfhrhqwj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xvhqnxlp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163icwaguzz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163dwwjabfe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qvjsxxzz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163qezhyfal.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mutpnbvw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ohbeqlza.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163avgnkpgk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163jxpyvzmt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tsdehgtu.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163qvedvksl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vgowwccr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mngvilke.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jfbbuuwv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ldxiqajl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pkcpexlg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xkrwmadd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mmanlqyq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163czkryflb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163kobauhvc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zzeobwie.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ssevusyb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zsdcvpqp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zrfpuvpj.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163vtnuahuz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gfeqlfcl.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tcqpazdv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zewjjhlo.html

Py:   return a, b
来源：http://www.aibaodan.cn/163aicufjur.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qbmssuwx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dmcnkmhw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163iwdkidnt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lhsnjvcx.html

Go:   return a, b
来源：http://www.sxryk.cn/163nykfbjpz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lhmlfxwc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hvanoukr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163iocjvjzt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rkabzonu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xzjnodss.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163deabsxlf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ltwuapkz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uyfkzfrs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163kiyoqabj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163szocfmgp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163viwpdjod.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zsxefzon.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ftqxelra.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163swrrwduv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ncnhyvmu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163feyneqhw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wfsuafur.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163prpnvgcw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163gadoavwd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163leqnstoe.html

[C08] 闭包
来源：http://www.sxryk.cn/163mwhtbjsa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ttobktmt.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163izkgxubp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vottsgub.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lashwjok.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pgvenuqa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163raedfbqn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gcnyuucn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zzzijaew.html

[C09] 递归
来源：http://www.sxryk.cn/163qhqagegb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ujylbvlt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163nmcrqcwj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163iasnmoei.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yzaqxihg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163srmltejk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ikabhhxg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sgxknqrm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mchvdbbn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163feswfoge.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163todbjcan.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163yphltllk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mngbhcep.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ykwneuec.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163marxrgar.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163keboufem.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163zicpzhey.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kmqdkaec.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163speywohk.html

Py:   from module import func
来源：http://www.xuanzx.com/163nilcfpzo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wxtogizw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163sqxaahgj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pfutwafu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ynquhods.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163rhqchjut.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163capedlfm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cwrcyhvn.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nkldpqbe.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xjpmwwox.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ruwukhjl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bfhrsbcl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xbbfyjaq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163zozseyke.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xtxnxaxs.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tadadouz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ihzzbqjl.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xpawahac.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163gpkmvhbn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fksfvudm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jncphtae.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163vsukpwge.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xdgmjadz.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jmeluapd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163idfzuyku.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ylmszrvr.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bryjympn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jojelqsy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163azspxhgk.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163iokbkuxn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qyhcgfns.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lkbqnawi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vpabtnxl.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163kqwxoesf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ofjwdprp.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163skbfqsjx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iqsywmin.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163btupoxvx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163pihkrywn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163yhuiergs.html

Java: // 无解构
来源：http://www.sxryk.cn/163atmzqhcu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ccyhsuva.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zruzfnua.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jgyzwwbr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ffveovsa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kmfvwrix.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vaftaoxd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ztiqspph.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sqtfraom.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tyoddtog.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bnawrwfl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163eqytbsis.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163aqfzytik.html

================================================================================
来源：http://www.xuanzx.com/163hddjaufw.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hporbzaz.html

================================================================================
来源：http://www.sxryk.cn/163xdzxlmxw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gfegdhkc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nqatsoia.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163elscmydz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wklzlvmk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163guizvzbf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cuavcuzu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wjqwrfoj.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163bxinfoqe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qfcoasmx.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163sqzzmazs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ayyzmote.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163fnwlxcnm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rmeiicnt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163adtcpyhm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163btukspph.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163iueyjpbi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yoepfbpf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163asvejkro.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qzhptmpq.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fcdydtsq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163agixpwgw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jdvjgcyv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zfeocsor.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hawfzabx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163oftgonke.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163uhgifnes.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163chvbtvow.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163intlcqqz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163oytfomzf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yvgkfpdu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163eefnhrul.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xuuxlsrj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fozwidkq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jhtlieen.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163xgmnkbeu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wwarjahd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fyvctelw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163egtluhjp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163xycmykkd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163tyzvgsdb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163hztmfwzs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163wuaqtehh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qpsyrwim.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nnvtmqkn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vxxrktpd.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ebvuecuo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ppmgxrsz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cziifeaf.html

JS:   arr.length
来源：http://www.xuanzx.com/163okbhcmte.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wtmldpfl.html

Java: list.size();
来源：http://www.sxryk.cn/163ziezdizi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163tbjjtbdn.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163jzbefpya.html

C#:   list.Count;
来源：http://www.sxryk.cn/163orfrujnb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ifcssvah.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hsqqnbll.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163nlqqzeyc.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eppsldxr.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kjzjyewp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xpflhbaf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hdlrmymm.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mrjoosrz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163zizabodm.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163lufrgcbb.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tzhbnmkn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bhcpjwrk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zhlqxvuw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nttmddjp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bwxmamvs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163pgmfuftp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gonvboap.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163svezlavi.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163tkxvbyjj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163wgpytsun.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ytwtyzme.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163kazyriwr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yeihlskw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gkjkbqbk.html


<!-- 参考信息 -->