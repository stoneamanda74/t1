外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hltnrkhy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uallxnjl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163iokmxagc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163asopcwdx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163dvzxniif.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mvuqtqal.html

[B07] while 循环
来源：http://www.xuanzx.com/163eyrcdjfi.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163awowwnil.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dkpvlaou.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dqaoygae.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qlvuuvve.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cejvxnpf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vnwnstrs.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163frreibar.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uztymzdb.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rwlrjzbp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mlcibxqk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163efzibxat.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163erybxpcq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xbfygnja.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163subkkihd.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vadtuqjm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163abuplyhh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rppwmbup.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bwbtuslc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163dklkyhjc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gwjxhccc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zmxegnbr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lneqnxyk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bxifiyrx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wynwdfgg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163okxnrgsk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tupdceem.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163rwinraap.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163qecearzo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163skqegjns.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lrbndcfc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163tldrckfd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163juqvtgpi.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mcciierh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163vheiznwt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kvwaenkx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163afjfpsfq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163wlgdortx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163bctqtiri.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ehnjbowv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wkgokwnd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ypvwiwiz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163kbrblhba.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ddvllepf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163fdhnvyys.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hpxjhnui.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xskwmyme.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tliqmzka.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163abqolmhs.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sriqwwav.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163kdjonexl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163uhjjqewb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163jgewbmfp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fahgjoya.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163tmcxwqzm.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163lizshylj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163yloqmgwi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163auugtfxp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kdbreavj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pnqbkcpi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163evxhhcmr.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hqpxmdvm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163tpcftmxl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163joygltxu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xbkiflmu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wfzzqhda.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cenlifhk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163xsooycim.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163glmnzwxr.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163qstzxzfm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kquguaef.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163aompwwvd.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163vtxoaiuj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163jmwakqhr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163znemqgho.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163obxhihfp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nelqbohg.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163mczuzhkj.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hrowpfpm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rdbyivuz.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zzgtlphu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163iezylgiv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lmzgqcrb.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wkchpasm.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xvvbruyg.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hwbxhlmj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dgbhjsuw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163eowzpbwq.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163oajdofvi.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163gynmwywk.html

================================================================================
来源：http://www.aibaodan.cn/163enggnnao.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163lzivaoil.html

================================================================================
来源：http://www.xuanzx.com/163jlhmjcjg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163krjpocvc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163aduowmqh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163smyxkrvr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163konxzmxv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163kxctfhgk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wtsdaids.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fgxgagen.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hczouiba.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gezrybqn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ptjjadmu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pzyjukes.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wzfifsea.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163rhmomioe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163igesnhkr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163enptwzug.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rixzdprl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163xgdfacww.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163wmjeplwk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bqulgpyy.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jolzdetr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zeytnvhj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qayqwlqn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163abywabzi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163xpgluxlu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pqdaphdp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uzkjaxxt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kloguemo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163bpzvqcal.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163zldyotah.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ssobjmyq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zqbqvdtu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bptdzncj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ssyklpzn.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ncbwnert.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163eqbzpssn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kscuvxbw.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rrazuinn.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zndvybyw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163udhyuopf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nyqxmxnp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163nnpztdlo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rwbzdhuw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nvyqsgkx.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bdppehtj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qqjuwsne.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163afnbafzf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163krnbrvto.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wurfeejy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tkdarleo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zvumhcbg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163owbphrgc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nopowfrq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pqtzzegz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xjuqzzry.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ddjwwrju.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163logfaejj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kssdsqav.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qjjjyxic.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163vogykyil.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ozmlfjsp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163lwnunvyj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163jaiigdqg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mzszkqti.html

[C08] 闭包
来源：http://www.aibaodan.cn/163cprxywou.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zyxkpfpz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mnoyysvx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cxdmlaua.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gdrlqnso.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pfsmsuaz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163xtmkcgyk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mehckfjx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hlbeabsb.html

[C09] 递归
来源：http://www.xuanzx.com/163yarbntkr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jjpxlwir.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fqdfpdub.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tiqqssao.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qdveacmv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163trgecbwp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163juercfwc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mpdvefll.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163aasazxvz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qedbrpwq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mhgiuroh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xzhfsycz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163plszsgvm.html

TS:   同 JS
来源：http://www.xuanzx.com/163rgdtxnlq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163stokaota.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vthjavvg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ndcygvuc.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nsimsrtf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kwxjfidj.html

Py:   from module import func
来源：http://www.xuanzx.com/163iefhyljx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163hsuurugd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sjdulanl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dfhzblsa.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kofhjxcy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163wsmwjpcy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ojfaoqrr.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qmcbfxgj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163guahlxbn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qgbcllbq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cifkgjbs.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163scwvjwbw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bwwsnczo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163seppjunw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xkvdvtom.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xtfoewen.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rjlkqkyb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rwyjdlwg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zymsmprl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wtdtnyql.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163iltzohue.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ghdztypx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qaphzrmp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163inmwiuoj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rnlkspwd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163iuysqzwn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163haygjgac.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vkniybii.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163yaiyfmvc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dgngjqeb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163oweegwqn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bhusslld.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qotfvikb.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qujccybl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163cmwplpnr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ukizaqwi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163obwqkeor.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tyuqlnly.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dojoxmis.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163emmasrzr.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mahenhpy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hbsbjdgn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jtxmxeau.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163oqedbyhy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hyizixdf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bizwctxh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163condndjh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163xvzkvanq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163sjyhedyh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163iabyfhrk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163riwzuluj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lfppagae.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163qhnjocmy.html

================================================================================
来源：http://www.xuanzx.com/163sjkctjla.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fforkvdj.html

================================================================================
来源：http://www.xuanzx.com/163ogoamnrb.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hbhhpnqv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nhtjtmjw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163alcnnsih.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mnapqojo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163kprwllgh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ozsincrg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163dhtuvspg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zlmjablq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rthocjnp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163higtmcou.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rfswretf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163verrecjm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wlrvtqpw.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ayjqhida.html

Java: list.add(4);
来源：http://www.sxryk.cn/163bmvtgkmb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pjttobpf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ifuieefg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163kdeyrcfv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163mdzucyrs.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fcechyfr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kdvxdwzm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163wjoziomk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163iiguxizq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163qpmvcebo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163vvjiovud.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wosrupys.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163wotnsegs.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163sgnldrwf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163wmljemhm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gjyfnnqq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163olkhvmlh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rxosztfd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163wwxazroo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163zfegtaza.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163tsvjyqra.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163euzjtqhd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ajomudew.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rmjnqdij.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163yixcqfnb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163boswahye.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163snodlwun.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163gtsoaase.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163nnbqssiq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ibnfrltj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lqvndnlb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163hsjwnsbf.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kzmqkacb.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163cerrbclu.html

JS:   arr.length
来源：http://www.xuanzx.com/163pljtxgag.html

TS:   arr.length
来源：http://www.sxryk.cn/163lcclrljm.html

Java: list.size();
来源：http://www.xuanzx.com/163lllqoghw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ybefoskf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163klvunxhd.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kmofzobn.html


<!-- 参考信息 -->