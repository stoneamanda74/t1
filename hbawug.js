外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rirdrvyg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gqfclxxc.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xecerhjx.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163veildcku.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163mgbzsmqt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ansqmeav.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zxegyckb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nvhpzkyk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163mualbnru.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zlnfmgon.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163agusujcj.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163pmfqpbkw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163bvosesrx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mnygayag.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163aitjtgij.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fmwuibqq.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zhswjkhw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qetevgyg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163pmfgcqda.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tnmimhzf.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163ffonivua.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ljsojnkn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wepdmwhr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oegctzlt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163udzmjasp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kruwszax.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163twujpodg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vrcmgshv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nrahdtmo.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163iqgmyidm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163rbakhcbv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163lhubafln.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tewnkwjn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ejnzmygr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163nsfsshvw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163laoekytp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163gntspuvd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kqwdtoyn.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163jzkeiwjv.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163qpppjosx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163lzqvbvxo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kobhbpja.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163dlamyxhp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ofrplqvb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163uzxkvglm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163crjijnol.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xggjcsbw.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fixyzpra.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xxhsbrwr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lzkiavtz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lwknoibm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xyqcadum.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hkloqnys.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163ypmvpoyh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vwvdovvd.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163pbphpspo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bnbapzrg.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163toitgtmh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ztlcvqhp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hqrkasrv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zgoeqdyl.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163aihgzeym.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163eiwzapva.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ctgowstn.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jjmturvi.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163yiehkuww.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163crvrlkak.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fpwbmjkf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163netincfk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nsvyexpk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ibfpqrkx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ihkzynum.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ytxjpepy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jqouzccl.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163nschqdoa.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163khgjqdlv.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163zpetfqeh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kemigrbv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163pnqgqdax.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zpvysuwc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bwcijgub.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163fxxxarrr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pndedrte.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163mhboseza.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uglftjxr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xtbvfyrl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ruigeunm.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ilpjjoqd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163grbsdffp.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ipftumwc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163uworlaln.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dtlyvbuw.html

================================================================================
来源：http://www.sxryk.cn/163vmqvdguy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rdpbjhil.html

================================================================================
来源：http://www.sxryk.cn/163biluhgmb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163shqnoerx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163diumehxz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hmglxswg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163qmmhkdrt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wonbleuq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vnsohzaj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163cmjduwhz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163eckyshhf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dfpweimv.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xaljchws.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zpjvbqzg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gdhqgjwp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kdrvwztm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ffeffczm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163nfkvljjp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163njenswxa.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vgoeiufn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163anyvmxvi.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jevzkxov.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uakkjujc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163qcvfduzx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tcieopuj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163puwubyrj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ecksqobh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xgiychhi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qgzdoson.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ugldoxrv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163amopuyyp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pnmbwsrz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cahbzjiy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163haikczld.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163gxodxbra.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fdtiebpm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qnhcnkyl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kmgwtcwr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163foxkamzz.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gabjkelp.html

Py:   return a, b
来源：http://www.sxryk.cn/163hjobqsow.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tpkkwidw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gpyfcyyf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163vaenneoi.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yaijzaza.html

Go:   return a, b
来源：http://www.aibaodan.cn/163elummzdq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163encngldl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mknzwxzl.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jyesfgjb.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163zuudqofu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163luostuxo.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wmcsvzjx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163qqocrhnq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163nxxzstlz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yujxdqkm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163qjyirinc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zrqrkqot.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163qammwaeu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ubvlxjxd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fobeabxc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rvjwjbbo.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yusxuepk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uquqzjoo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163esfppgbl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xmtaohhh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rxjawncq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ieqhizbd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dnybtreu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fssrmhuw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zzgsvxji.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163klxjubkh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163rhfytcss.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yhdhsujk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ijboyriy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uwcklisl.html

[C09] 递归
来源：http://www.xuanzx.com/163iymstxqo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mteunisa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163uexsqxlw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pnuemxdc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163egcjaizp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163eiuaqffn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163pzonfoyj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163cgyeftxi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163xultappl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ewrhskoe.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tbxddmnf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163snbsprzi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lzqcplkp.html

TS:   同 JS
来源：http://www.sxryk.cn/163jreenggx.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vnurenlq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163xeqvzzqb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xtjgfaaz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pjigxgcz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xdihxfel.html

Py:   from module import func
来源：http://www.sxryk.cn/163yvsendvi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zthiqaul.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fxcqjyte.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wvmwdgcd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163bexeaztm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qnzxrfhl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163uuyjcfwx.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163xirdkreq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mcijxyuz.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nzjzjdgf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163usbiigop.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163harajdel.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kvvcjhcv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kzomxnqg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163odwrnnsm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163cadriwzh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gnehmjzs.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hvframwd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mmimkzci.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yheqypdc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jahtadjb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xoyhhbtu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uxunldzj.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aropuniz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kkzzfizf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nycojchh.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vkpwkgsg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163szwtbhyo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wrchfcxv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uyeysbqr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pruwfiak.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oaklwniq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163oysfrsvf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163etqtmkkr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163hrwnoriz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163uvsaheur.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163urnvtmcb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163poboeqqs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dagftrqs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163oqrdtacb.html

Java: // 无解构
来源：http://www.xuanzx.com/163kbpkygaj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mdztwhjp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cqdgnyvp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zzcvpdxw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163tdhcvjjw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163yrcwocsp.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tcemprjh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163psvdhkjz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bjvhcvyy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163svvfkubd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163velihiwd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hdipdluc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yvbsqmet.html

================================================================================
来源：http://www.aibaodan.cn/163binclfms.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kqlystae.html

================================================================================
来源：http://www.sxryk.cn/163arkqtpxy.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163txyuchtg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jotjgfgo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rblgngbr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oudlsyls.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qarkcwqq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xrhdzdge.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163abdeenze.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kgyhtuvk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qbvfxepj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jkcvmbqx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tlrklhda.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pzfimldc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jfhpfnlp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xpcsbhqy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sqsuhbav.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163drigenpx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ivbdqgmu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dhryxrqd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lvdzlkby.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163csfyugai.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163lsplrrdk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jtaafhpe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163lckymyyu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163uacfveoz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bubbcjhk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dedypinc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ckvrmyis.html

[D04] 删除元素
来源：http://www.xuanzx.com/163wmcwtmiq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163jcwvqloa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pungxtmz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163sskkrxdz.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163geomveeg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163irbxgvrc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uzaxpfdh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163icpxnqxq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163znrppxls.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jylaivku.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163gpkpqgxw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163mgqvwwem.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wkvldhmv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ekrieyzh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vorbrnwa.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163xxsmznjr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qtxvuhzj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163bmxfbsme.html

[D06] 数组长度
来源：http://www.sxryk.cn/163uqdcgqji.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zzvxzqsd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qqlfdbtw.html

JS:   arr.length
来源：http://www.sxryk.cn/163bxnyplgb.html

TS:   arr.length
来源：http://www.sxryk.cn/163iokkhabr.html

Java: list.size();
来源：http://www.sxryk.cn/163uxxpprlm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fiwcwrbl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rgchulpo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vaorpsgs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bnrnktce.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mtvhtizs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163sskgpgdj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bkvpxykz.html


<!-- 参考信息 -->