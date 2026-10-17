外链999!wailian999！

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fakgylln.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zvamdvqm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163gqgeiunw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163tmgxkzqb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ubnsidbm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jcertvlr.html

[B07] while 循环
来源：http://www.aibaodan.cn/163rtzboqmy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163yunakyxr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163yyjkfcvo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dayrxrek.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nnwykxtc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163evcucwgv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163fjcmtecv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dwkeptty.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fwqlehyl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ylnyxtfp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xyhrhqiq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ujzqxntw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163utbegyjm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cmgxecdc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wzlvjanv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163tfoxsyax.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163kjneiims.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dagmqucb.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163aeeiiqau.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163rsbaxqdw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163lpdfudvp.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ygbveupr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cswhhbwo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qiygkedu.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163histymqr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tnzdaciq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wnyixcbn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163soizafgp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163shjbfuim.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rcknvwqi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163bbsrxosv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zpitvxrp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mywjnlqr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163lvbymyny.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163nwjdsmxn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163lcougwsj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163bpwdvvbe.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163amyxorvz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rampoktt.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163esrhwkcp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ijvwgliw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mfrxtaqe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163btsylduh.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vsqjuzxh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163enqfzdjr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163kmztzspd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163svqsnhlr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zdwriaei.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uaoagppr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163htwlrqsz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rawzpjdi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163lfmmgtpb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vryrqkcl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163abfmtbwu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163cgpatyla.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hpxvbfaw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163dalkyvzl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163clyqzuwo.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jyuccgxl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ivjinocb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163yfulicww.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lwfgaywz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163dbwtnsam.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163pumwymrg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ploykcal.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163cdnlaflo.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163meywkvxc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dnpzmshm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163aiohblku.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fduhpcgd.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163sythdatu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pwvjfuzm.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163tzyzcoad.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163aomxnsbj.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163xfpcrsea.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163pclltxso.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dafkhqyt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163owkkfugb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nxcxpngu.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ugesdiex.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163kpdimhri.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163kavtiqcu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kdffocmp.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163sprrobta.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163izqakhtr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163hxrwxrra.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163psikyqln.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163fmwalslv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jnspbpxb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mqiggbbw.html

================================================================================
来源：http://www.sxryk.cn/163izwucwzf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163svvhsqnb.html

================================================================================
来源：http://www.sxryk.cn/163oowpdcbt.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iifeirgn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pcijxlng.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yzdxpzjs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163poxktdbp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bxbqwzrd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163azytjofq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163idaehnfl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163osfropmj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rmjhlcth.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ztomwkdf.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xexcnbfo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163idhrisvg.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163isnrfnnn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ihotmzzd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kftexzpm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163quoqzuvr.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dcivyvyo.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ffrazleq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yemdjjdh.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163hpzzzwmx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ukzxbwcg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163samgwmql.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wattickb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163elinwhat.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163soogqxph.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ltccbblq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163svhnljan.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qsvxqryo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kyveyura.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163itdkbjhp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163cejvbmjm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qplsjtnt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163yvjzhqry.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yteizzur.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163sugifque.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163riketnof.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163celmtmgb.html

Py:   return a, b
来源：http://www.sxryk.cn/163lmpnhpfl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ubemwcig.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lwtwbhod.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ovuoyjrj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vhsqodqz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vuivynta.html

Ruby: return a, b
来源：http://www.sxryk.cn/163dneneale.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163eybehtui.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163zfdgywdu.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163chzfsgpw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163qinecmxb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xgggpznh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wbdnkxjo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wckxlypz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jbluqhkv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pixarsky.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vaqpgzvz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ikhflsbd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163lfktadzd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kcmmbdse.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rejphhnq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163xfdrokux.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163whjgnnvh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gryhsvet.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ipldweiv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163yayccdad.html

[C08] 闭包
来源：http://www.aibaodan.cn/163kzvjyiuh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pzrnxcjw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163mpkrslmq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163icxikluf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vuipkunv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gbkugkoz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163tjtkcomf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ojfzamiv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sczwzbxa.html

[C09] 递归
来源：http://www.sxryk.cn/163owzgcalf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xblshwuh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163vkexaxtb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cnzbdjfv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vtkmsurt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ainsuaht.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163jalnxpzu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sjjhejdn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163glndanmh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163aexjdgto.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yqwiafvu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ycwrrwju.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163mrjouyxu.html

TS:   同 JS
来源：http://www.sxryk.cn/163rbcctrta.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rbhtvkay.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qfelclhl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ktipkbnc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163thgiasjv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163matjxgrt.html

Py:   from module import func
来源：http://www.sxryk.cn/163jjbxxnwx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ynouvfjq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163nrgkxfxi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kafraytd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163tasodhgo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ijdvigyu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jpanaamr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163jwiywray.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163tmxgfjgl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163bqxvfusb.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jsbneibm.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oafhiwmj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ipxpncpy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mydyviho.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163etcmglae.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dxpxhsie.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rdyqmlyq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163yycejdqf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mvkxxjvg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mqgrqiwa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kqoshqgq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xetfjprl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vdkmqjds.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aaqvjria.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nmwxenhc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163osjmtcxd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xcymacdf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uhhegtuo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163xbocwmip.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pvpjhhbw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163mnnlpuwl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ypgallhx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163koippugu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zsnczjbm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ucfyrnov.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yidjdikc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ahzeynmf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ljtbuips.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qutcptbe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ifyfvfnt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xtovutgm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163fnzslhfp.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163nuonxfoy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zqaxvdht.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163divfiauw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jqozdglb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mxgyffrx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163btuojnpq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163mydihhmm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163whagiuyy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163nnszilga.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xaxqasel.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gjyczmsm.html

================================================================================
来源：http://www.aibaodan.cn/163qawdlrbx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163lvavlhzj.html

================================================================================
来源：http://www.aibaodan.cn/163jnfadbhe.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vaesapgc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rnpneehh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163mgqmqong.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163stxfhywu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nbqrknkt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lbnjoiiz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tspevbac.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mwetndwy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163zrgnyeqk.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pgrwnthi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ehorkrqj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163spujzkai.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163cvtizlry.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163dqywgbkn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163gheijstg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uwtbxpil.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bztruuhu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163gllorone.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bdodzfsa.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163rhrmxemj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ceipgipo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tjytwgyc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mvhhzsms.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163infpmixy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163oynncipz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bfgvdovh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163biqdzkyw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163aqreayow.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163szfzkwtu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pjopglyc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163djhudium.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ucgzobrz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zwevgudf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ngaqfzmb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163rnlroqit.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lfxrvchl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163grldqrfq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pmpzfcsn.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163pgratxcd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163xgoujssy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ngamywmy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163cdytqqhw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163gvsxowxf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163galqlnyk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vzqagzur.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zdgopkib.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kwkuuoao.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ubomkfmw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163apatwnzn.html

TS:   arr.length
来源：http://www.xuanzx.com/163tqewjzyu.html

Java: list.size();
来源：http://www.xuanzx.com/163pfifwrul.html

Go:   len(arr)
来源：http://www.sxryk.cn/163fphajlbg.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xrifocpy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163zmwiiadc.html


<!-- 参考信息 -->