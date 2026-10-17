外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163tfwtyvcm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mpdgejwp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lxhtabrl.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163yeipswjq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rhxkgbwp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163buafvmxm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qvjbgcsz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163djjrouhg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163jyhqoxfz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163jouhjpwc.html

[B07] while 循环
来源：http://www.xuanzx.com/163bnurojeq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lrjyvpal.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ijvegsxx.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rdaqbijj.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ssnkvhqo.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wbuizonw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163vfrcmbdy.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qwyfonnr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kmdypfiz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fdgkjenu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xnhtmbdn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163mpzgbwmg.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rqpxskju.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aeoaijrn.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163obcfvtqg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wysnohfb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ykwjaupx.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ayjbaepr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kqhbqfgb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fbgbmbyp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163svrboioz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qjvexjss.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oyptleqh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kvphzliy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xkmctdme.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hywijqxp.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163djfuppqi.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163uewcaqhd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163cfjztswj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163iqgyuzir.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163eahcloaw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ehknbufz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163frownolf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hxxanwkk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163bsxnjmsb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163bekuvluw.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163wqasmqfe.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mlwngkwj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jnzwsutl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163utpvfpvw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ljahebkx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163emjlvxsz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163qfolxkoi.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163xbkovnwe.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ykjuxptq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wvsdjqrd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ccbzegjh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pzjjnjpi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ilqhqman.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wnqjriiz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163lfizzjit.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163gudzhmvj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ggwpaszk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bicuoymx.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163bhsssduu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ydwpldge.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zpjykptc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cbgfaghw.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zrcrvirs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xewcpkuv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cmkcznei.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cmvnaory.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163jstcosnw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ttxxvwkw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xxsxjsng.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163izprlxcq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163umiaruur.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rwetkohy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ftgeczvk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163rtposrgv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wzpjbjng.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163aqendebq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163irjeqden.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163wtjflqod.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ioigugca.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163suetqqyi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dritdubm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ekuhqnpc.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hjdwwwcp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wjllxzuv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ezkjlnvx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163anfzqjvl.html

Py:   if not data: return
来源：http://www.xuanzx.com/163maigkwbi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cbypnlwi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zgrrlxma.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jmaanqrp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ihrtegtn.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163prlrjnlj.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vveejdwt.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mpaugyww.html

================================================================================
来源：http://www.sxryk.cn/163zbciphdx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163yudlcgzv.html

================================================================================
来源：http://www.xuanzx.com/163apnmuryu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lvtvkjmr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163ybmsbfok.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163psreclnr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xqxkaxqg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kfhorwwj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bugeqvus.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kzcwleod.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fpnqkitk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vwtdzxsy.html

[C02] 默认参数
来源：http://www.sxryk.cn/163vhzrcjbm.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163moqdmgot.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163hkougxef.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ctlxyads.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163opvhaijo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zzalqeea.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163xujsottu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pfwbpxfj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163fihnmzqq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xhesumkb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163aiklrvnk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163mixrywco.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163brhgusyc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jdqqktsq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163lhsoodqz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hwhzmisj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163msucyoaq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163nvjiaenx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kfftgxxs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163lqcymlwe.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163eqvpwhxo.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163okqxvizc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wjiiaedf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163chhtuquc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163sorxnrty.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xcppzewy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163futmxnxb.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163nglpheud.html

Py:   return a, b
来源：http://www.sxryk.cn/163eiamurnh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163oyabljib.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kmsmpmzi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pcnftgxe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163znbchapk.html

Go:   return a, b
来源：http://www.sxryk.cn/163zhflmurx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163iprxyheu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163iogqnehe.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lotvwuin.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163bkrcimsh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ukrdmmsc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163flvegkxp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163cclgjtwh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163typoizpp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163tjxeoqyl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ybdmfdhh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hrxmyebk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163okbqhgbe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vpizspjp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xapkylhc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ohwmpihd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vhcldyvo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yxotkozq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ylqqgori.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mzwfrbbp.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163ciompxsb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163swnskvqp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163sotfcbya.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jartwizs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oqvoiuun.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163dyfwspfj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vitwnfnl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mcmpouos.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163zihszeoc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vfxhmuvp.html

[C09] 递归
来源：http://www.sxryk.cn/163hvdqmkcw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163aiwugjnf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sjnzidwi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uguqqqlw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jswhgzlp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bclhrxuk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rzxeuctm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163dhgrigid.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163cuzbulrv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ygutpcxg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wcnzfvhl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rsrvmqqs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163kslxxaio.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dkweipfr.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ruhjqsjp.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163rgssiumb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gsywynsk.html

C#:   块级作用域
来源：http://www.sxryk.cn/163nrzlzurn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163qibiztaw.html

Py:   from module import func
来源：http://www.sxryk.cn/163xjiolveu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zviayudd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rvlkcixb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iqhypbhk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nqdsndao.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kzrfvzma.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jmxbdrvh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163gwcxhxlz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ikcmrshg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rmphsvhs.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163skdlvwxz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ditubjaw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zfbcoacf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ubjcpwwm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tlhprxbt.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163olneupuw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163flqvqoqh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163eextnfew.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163amulrrur.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yecrxaea.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zxbwrnys.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qvdannds.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fdxjyjns.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163usxmrswe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163cpkgcepo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bsrrhxdb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gzniyazm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ihszcqxw.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163nsstshdt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163uqfeerrc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gcljdgzm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pakamndx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163otrnugsf.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gdrbtrxk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163obhfrvbv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wxeyevmt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163fhrbhppu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fklssgux.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ahsuldan.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163odvwhvtf.html

Java: // 无解构
来源：http://www.aibaodan.cn/163atduwtbi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163oootfzla.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163dkygyanx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163pkgyohnx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163minaltii.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ugfuyixr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163rzyngdjt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163evxutjwa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163oxehlxvn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163fnpfhtzb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yqeapvrv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163aiikzzdx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163enyxoxrh.html

================================================================================
来源：http://www.aibaodan.cn/163kkcnwadc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fhnotsje.html

================================================================================
来源：http://www.sxryk.cn/163vuqfzodq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163uiskvrll.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163llhsbmoz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163uhiiwlnu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tkxnbbva.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163owfelgff.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xgqakvrj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ncgxuvtt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xozblmcf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mudapeoy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mwfutbss.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mokmtewd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gqzrvair.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jbcguign.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163icqfekyx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163szkumqla.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163womammjg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163flgixcfc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163rmolpzjn.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163dwwktmdb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163heajwoip.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pmkzdmxh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rzsjurit.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hvcodavi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wgumnvzb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bjyirgno.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bvixhool.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ntvznoqq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163pkgaxlxa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xnlkyoth.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163iaqfeciw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gwhllqci.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ltzoaazr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xcmjgytc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163trvxwmpq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qbaznhzf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ddizxaxu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kuyyvmpx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wmstnnan.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jlhcqooc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163itznkqxh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ksafnxel.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tfhdbfxw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163sjlrbarw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cckvlrra.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zhberbsr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163aghmfolg.html

Py:   len(arr)
来源：http://www.xuanzx.com/163twprbpvr.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163upvclxdc.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ibapkhbz.html

TS:   arr.length
来源：http://www.xuanzx.com/163aigaeybb.html


<!-- 参考信息 -->