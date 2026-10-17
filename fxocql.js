外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163mkiqqsus.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163tijyggtm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kbmusaca.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ogmongjm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163yofzcsjy.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eduyzfdq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yadjyrcc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163afnmkpib.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163zxmpezij.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ofidcodn.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ekmvuaxf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wxlezxxe.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163drqptsyd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163sigumbog.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163shzbhdac.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vkonobhl.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jbfrjyfp.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hyratwoj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163udxecgue.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ahsbosmq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nrmjehbr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jfwhffso.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163juiaavym.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163atyecoqo.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wkpazcai.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pcqodcdx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163rodlyxbk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163iftjzbqf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uctcztap.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xqstmxub.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wapwsjhj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kaxglhar.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lmrjtlhk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163anviayfx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163usasoiex.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gptrzwmx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163smfamyyu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163dohihrxx.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163yfjdasop.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163czlqyvaz.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163vmfyyieh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163oqgtgluf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qlkhsigl.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dlpinpoz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xywnljcg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163hgdobsab.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dtmmnrjp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163emddzqao.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wjsdhedg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163amhipcnj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bglqklcc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zbkvgzuo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163grvkogke.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lppshbkx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163nvuinskc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vtayjgze.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163hwmtatiu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163vywcfzay.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uvidebnq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ibsbqgtc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163dnucagce.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gmhiedlq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yovosmzf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163bdzupubt.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jbbttzee.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ujdkfupy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163oldixhje.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163cdolgpcg.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163whakfzlg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fzlayzxx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dvelbasd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kvvwgmda.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163cjgtfrvj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163iqqkwjno.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163cbygning.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163klbdpkqq.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ounclorb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163gbslzqpl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dxkpmiln.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ipupbtcq.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tapyfvla.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163octmqdwn.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163esfyjeew.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ikvwaqts.html

Py:   if not data: return
来源：http://www.xuanzx.com/163znkpnvei.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wugfgnkl.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163cpotthnh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163leepmcjw.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fxeyhrzl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uuonphzl.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cgqrwtzu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163dnrvaqih.html

================================================================================
来源：http://www.sxryk.cn/163oxaarpia.html

C. 函数与作用域
来源：http://www.sxryk.cn/163snobyqqn.html

================================================================================
来源：http://www.sxryk.cn/163xaeymfua.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xtqfdsbq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163iprxplbw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dcmfvbrf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tylogebm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ntzzhaks.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pxeckrsl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163tlbbhvam.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163orsjskvx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dsmzmilg.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wvcxdczb.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163hortcavj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xrbybqog.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ldqvctdr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kzehfrhe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ivrzalmi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dknzcewa.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yhkibybp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tvmhtmgy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163sdqlduqs.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163nzlnajjm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ksuvyvsh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fgxbhczg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fqtdvcgr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163sjnuwvwv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163efmonvnz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jipfkrqc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163enniidgy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ssoogppu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jltiqguz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pbtdsrbc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163czpebzbu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bigfvlmo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yzgceytb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lgrsmbdx.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163aunjvqcv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ordygymk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ygtpkzjn.html

Py:   return a, b
来源：http://www.xuanzx.com/163ohcvuthq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163inlxpwel.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cxrdbsug.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163pznuxwvg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bkcnpfou.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gpqukdef.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163edbqngyq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nockweey.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hwindehl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163oresjwqw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ntqjhrde.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163rjbsvoxa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bkazwsri.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163iveqjwsv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163qkrfkxif.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xvlzxmrc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ysrjrayn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rjousosy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ftivlphy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zsomflzo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163movnwfah.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nevqmtyz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tqcgfzeq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163mazvupgs.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163tchbqxju.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163abahhoyb.html

[C08] 闭包
来源：http://www.xuanzx.com/163wacbtjbn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163cgembfjh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163nrkhrtua.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fccvgjmr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hdditxoi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163truydouf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kuztjrdb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ifbrvatr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nkkzwutf.html

[C09] 递归
来源：http://www.aibaodan.cn/163erzjisya.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vrxcyhsv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163yxggyklf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ewquhqfm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vszgwhem.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cmtwpkdc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163rdlcqcbt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163knldzxiu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163urkjdlsa.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163zrjfsjyh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163inbrdrfv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163unuqspxh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lawmuqih.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zelrcqxh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zduuhphy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qvcptqwq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bizojtpz.html

C#:   块级作用域
来源：http://www.sxryk.cn/163iskhlpki.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wewigzfw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lqieqqct.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163itrnceof.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ebqmwitr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163vngvxawe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163kbaygork.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ogcsrphu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nklbnpcz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qsbjefgo.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ilicfdys.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zdpdzruh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163raknzjtj.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vgatufab.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bmihrbzy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sqiiuaiv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163eiifminu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163rnnaxszq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gillvith.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hatrfejs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mmfgruzt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163awgteayi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kqsgjhss.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bkuemnma.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fveqsxwc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rkphjenp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ilbzzapw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163melwtpog.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pgcruxjq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163qmneucia.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rodcjslp.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xzojnudn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163skgetnfk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dhdhswvi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163okfrukld.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dkbazfbx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sasyanyj.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cvkliacf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nxnvcbmt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kuhqtlbi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bghxokkh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163slqrslas.html

Java: // 无解构
来源：http://www.sxryk.cn/163gzevfaxk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163biticbfo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kvbmqqot.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ctygnnlc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163podrzmry.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fygcnhbj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163cdgkddgx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163errgphcn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yptyixrb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163atxxfngx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tawhujym.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163qsmvzuzj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gmhadhyv.html

================================================================================
来源：http://www.xuanzx.com/163smitzzfq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163dizgdrod.html

================================================================================
来源：http://www.aibaodan.cn/163otypuuvi.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rpdzccdt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mtwfyvsc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ggsvktkn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163frtfflhr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163hopnsydt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163isoucwqx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163yhvwnmwa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jbxsuirs.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163dpqeeztw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163wbglsazg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bhgspnpy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163becnyefs.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hqfxtzco.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163nqtblxcw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rbzmnxsj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163yeieovtm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163oimrwmis.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163mtjvkqah.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163elojjdju.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163mtwhnajd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163eagdwrma.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163vpdwsfxk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163dxkhymsk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163uvuqhutb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163opzwyzvv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nqwyrcvs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cojfnftl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pqynqwkd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wzbwusxs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163uscmqzcq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qlzijbov.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ciqljbar.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mhyiyhhe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zcgohnmd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163lwjhrmvp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lnntwcwa.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tsooxhjk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zbhrdnfv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mcuyvydj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dhkcxsvx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dhznohwz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163anmcphus.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jtlgyxyy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hddretxo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vcoglfaj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qtrkiuqm.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ztfcodku.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jnibspvt.html

JS:   arr.length
来源：http://www.xuanzx.com/163oibhboap.html

TS:   arr.length
来源：http://www.aibaodan.cn/163khmajgrx.html

Java: list.size();
来源：http://www.aibaodan.cn/163dynbjmhv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ilhjyzyc.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163xfmgihoq.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163nodpgauw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163trpmwoqd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qcrvbzgf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xkazggjl.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vbqddvjy.html


<!-- 参考信息 -->