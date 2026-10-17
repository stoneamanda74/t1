外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vavbeped.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nyllsgmm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163asanjihw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163defdyltv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uugbzxrh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uvdmvrml.html

[B07] while 循环
来源：http://www.xuanzx.com/163ywagqaqs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163onspevwu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163surtthvh.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rrderrzq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ultugxbf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163fkrkiqid.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qwercudr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163zoxgqaqi.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163suthmdpn.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xuphtqqp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jtgfwzjc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nzabbopv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ztmlugui.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gwwpgcvl.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vmcarviy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163attpujpo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163zhbghuau.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163unhmvvln.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fswcbbne.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163uofdmouw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163jtuhtixu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pulzsbih.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ruwxnzmu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lknffjsj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163itptpllb.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163sylfcdit.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vonhbeni.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qzlmqkfp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163grlkxdim.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fhpubomb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163dfzhxipc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ukyejtye.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163zrwykcgm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163wdbikftd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163xbpepqdf.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jlmbdrov.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163glnybxid.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163yfdjpxaw.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163aqjvbgpz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gtszafbg.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jdzfhzkd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163vyrbvuml.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dktfgcdi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nwjtphle.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163etdahqfd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163jcvdador.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qlyjvuaa.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iptmhkjx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163smikerhj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ycshxmip.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xmokdroj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yjsmtioz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ubvmvyrt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bgjpacsj.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fhnmvmpq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163zxhkqdlj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163tbypykzs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nqzfzodi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pgwwslct.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163penstshe.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163grjjqvxx.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gijmopui.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163waktpunl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rfpubpvj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163byiyllqn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163zeycdwww.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ixlkhoni.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163idileasa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pabuofki.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163yglczjye.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jfkepaqx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qhswwalz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163dkrjxulq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qweodgag.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pjsyvrtv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163dliuwedw.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jerpfelb.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bkudjnft.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163edhgklrl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vsxhtawy.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163pwnvgykc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163zrmaigvd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163cqoraewk.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163amckgtcb.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163uvxowbsa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dhyeipmm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wimysece.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163smpqkkvg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tuxjzzkk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tcsfjwbk.html

================================================================================
来源：http://www.xuanzx.com/163ibosphjk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163sruwytaf.html

================================================================================
来源：http://www.aibaodan.cn/163bopahjww.html

[C01] 定义函数
来源：http://www.sxryk.cn/163kthkoiej.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aqeanluw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qmpuvrry.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163keiecvww.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sxtinejs.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ffcwxpcd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pkrmzuim.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rdgfanxp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rcwiwmgo.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ulcuskth.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163gxyomwbu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xfgqsshl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163asrxdmwu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163exvlbohk.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163fvivgqph.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zjajqkoe.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hwgywxjs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wohrqbda.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mkmbpdna.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163sydzzqyn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fedryktm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163glhmoqpj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tshxfgnn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dnukwqfl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fypikuhv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yqnekdhu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163balxsxbn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kapnolrf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fmxbiipj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gjaxsegj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163naicnqvg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gpyynuhq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163zpdeyehl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nnevpdkk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fddwqqrn.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ciabvegc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163igliqijj.html

Py:   return a, b
来源：http://www.sxryk.cn/163puqzvxvk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kdwhywyo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163twnkkznr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163kmrqonne.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xcuvdosb.html

Go:   return a, b
来源：http://www.xuanzx.com/163ulklqtfk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lbkcoscv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163lvmzbuwe.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xjwmnwif.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163afrrqpvg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163nplauxcs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uyvyadic.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tajmiptc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163nbwvkgmn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163nmpcclcf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bnkpfesl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jtphiepv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163evrdaepj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zexumfip.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163inwwgpqd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163tykstban.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163fgbnodmr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bvtoqnfr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nhghyjcu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rgfdcjhh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qvaadmkr.html

[C08] 闭包
来源：http://www.sxryk.cn/163ixxppzus.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pssfsqxi.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lzbkynlg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163urqizurm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bshhswpz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ptkcjnbn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lwvigcmm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yrwtxbxj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xdoduxva.html

[C09] 递归
来源：http://www.xuanzx.com/163jubhdner.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ifnfonkg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pkexdruu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wqghbjam.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dofxbbwf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163cpeojajr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163duetupkj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163iztchqel.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mpxdxjdo.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163puumunua.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163wjnxjqbk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gqwcufir.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163srlciqce.html

TS:   同 JS
来源：http://www.sxryk.cn/163ccbuiuwk.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163uopzgdce.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rkjbgomz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163baawjhni.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jihwuawb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163jeukgkfl.html

Py:   from module import func
来源：http://www.aibaodan.cn/163kksqzjlm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163rcanflhq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rpjvwiey.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163zxhnlfrt.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hxucgspy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ccdtmoaz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163zjbmuego.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kopsesdd.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163rxgomsgn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dvmuxzdu.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163sicgcjqg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ppeskjqc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kvnuzbjn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163iicbwwdo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zmgbeniz.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kjnqufjv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vluxnkcq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kajejmap.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lqgiwrlv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gpzsotob.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tqvpwxvo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163oovoftnl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jnwqoxiu.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qqwbnmlg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163odapphxn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163oaytnall.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163bqmtrbyr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dnyxdcvc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163elfwqwum.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163jraeqecw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163tzbswefy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rkqqaprq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163jxwzxhob.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wntzebtc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wkqlieul.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nnqkykjj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oojgllyw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mslexgjk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ohuqfram.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163gwlftdfc.html

Java: // 无解构
来源：http://www.sxryk.cn/163bfotlrhu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163wztwwfjx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163cakkzhvk.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163edvxjmhi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163idtmquti.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jkswxksl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xavcmuox.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ojqcadox.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163uokdurnv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163myllfruf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163cnphhlcy.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xjzullxo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163aydrxfux.html

================================================================================
来源：http://www.xuanzx.com/163nbfrxgqr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163arbosbab.html

================================================================================
来源：http://www.sxryk.cn/163yisgrssi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zkjkkcsc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163yfnbkuth.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163faiqgxzz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qezkqyaj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xefqfxjf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vgrhrkej.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163gqpugjcg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dfvoyhkj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163eiricsuy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jlfiphgy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mfyqyzut.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cjohaomo.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yzxtvwwj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ysihqxmt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wwidyghn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mwxhmtju.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lkrszyvc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163eyslogvw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163spihsclp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rhudpusu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163avmeoxgc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sxhdkxfo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lndlchhn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vtldedsu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hfyupzmg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163faduqiha.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ylcwagdt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163imvdlipo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mgjhpiiu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163bblttbns.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wrwxqgal.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163hiqxjpqp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163wlnjpchg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163sygpkfqu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163fgoqvnrz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lrxxyxuj.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163uabvelhv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mfvtwvnd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ffbohshi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163zluskjtx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nsisfpug.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qkuchpkq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wbtvhzmc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pdrggpdr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dqiqmjht.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mxkfvxia.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gpycmyqr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ukavnrbn.html

JS:   arr.length
来源：http://www.xuanzx.com/163mijvntyz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163huutjawk.html

Java: list.size();
来源：http://www.xuanzx.com/163zxfhbshu.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tpdfnvxz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163blhrwbvy.html

C#:   list.Count;
来源：http://www.sxryk.cn/163vwszqrkz.html


<!-- 参考信息 -->