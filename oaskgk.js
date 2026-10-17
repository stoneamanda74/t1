外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163grhqxhga.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ccvsnjnq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163xfzmkqme.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163jofpligg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bjukucai.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wqnrnbvz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163icspsboz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wasqless.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163egmpouvu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mjjmkbwg.html

[B07] while 循环
来源：http://www.sxryk.cn/163umckjpxs.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yognycng.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xntuzkle.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gtgwoafw.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zaytaxdd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163unrcahvb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163tslbcnlu.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163pfbsjywm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qdkatttq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163avrnqmkf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163wajifwjr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163mxmqzpiq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qjzpfnhz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jyaxgnfr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hflnskoj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mniwxbjj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163sjkikyti.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163huxlqodt.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jxtizvjz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163niwggelw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163dtijtwfc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hhvhjpjv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kblfysfp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cgkbhcoi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163unjcnglw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163lyurizla.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163baznrany.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qrvcovlb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163kxoyxwpm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qfwpmuag.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163ulkhgdeu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dymywtsu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163bqattqtl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163umjmzlmz.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pawhnthr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ccklhxhg.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163rgufdwnx.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bmbobbie.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qljpagxl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hashkcxk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163virvplvs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163kjemowaw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jqmdczna.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ozqqjvuv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oydzjspt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kadzuhnh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163qychoizm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163nxczpwxu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163auwgtdcz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163brwirkzn.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nwpppavq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lplyabym.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163egdfaojj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163odkjdlyv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163oihiregg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163owmnwklo.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pihzjywf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163whkkqskc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vyesrmnc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hpohbrlu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tksbeecv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jnozaiwq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yjxvwycr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fghrfxnz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163dbdsqurt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163cqcqjvsu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163yxbvijqi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jymunqwa.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qtlitbrj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163abhylkeu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fggkoqpn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dxiadbme.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mevbvqbg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163rwqgwvoa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163jyzvmjyw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ifwqgcau.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cuuwhanf.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163obvfskib.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lunmuimp.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163txtjbjks.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163sihfgdjw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163uqbpqdle.html

Py:   if not data: return
来源：http://www.xuanzx.com/163dumwbsqf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fngtlohc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wixdycyt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163xhulbvqq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gbjzilum.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163yatbvzyk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163mydqiloq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163nvsrgjjf.html

================================================================================
来源：http://www.xuanzx.com/163jafsywcw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zchukfgg.html

================================================================================
来源：http://www.xuanzx.com/163axwhdxcp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zrsgjqru.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163theqiohi.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163boctagpz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vuadyfkx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163iffxulxq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eksftzlq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163yttvelpk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163kqrttlgy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tbtcenwn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ggqjidnx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lhjqrwcl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163guxvnnkp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zrbcmnnu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ggjxgyhl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kyqyyokz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163rrcgmuqe.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dixvxbza.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163zmkerdpm.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ygznwuge.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xgvrpdld.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163wbqnhpra.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kwacjhsh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tvergknv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163pkmjkfjo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163txoxzput.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cjcpwhud.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163tdhjwidm.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kmvplxri.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kqbwbjph.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tkdowzwz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vjdjymqx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pvznffsb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163blomobjt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163twjgolxw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lftsilrb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163iogkatep.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163yrkbjjfd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oibnosfp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dudwsbdj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163vgxyltcf.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ulttmlab.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vkhqsnwu.html

Go:   return a, b
来源：http://www.xuanzx.com/163hwhhfgqd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163secuqcbo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ougdbmmf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ekfpmqdp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fomjhzgs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mslbpyxs.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fsfowcrq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163wbzpzgel.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fkrtjaiw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zmbawkmz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163duioipti.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xfcuowsn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ixaaxeca.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rpprgwyu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163srjbkvep.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163aghmavsk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163tylhqzbd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pvvqcigi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163evofujpz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dvdsbuqy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zyspnush.html

[C08] 闭包
来源：http://www.sxryk.cn/163ujrdqbff.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jjdyzqwg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lvhgyrys.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163svkklold.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mlhbkgtm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163gtjycqay.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163xgtaksje.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fcbrhsmu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ycfzcorw.html

[C09] 递归
来源：http://www.xuanzx.com/163jkwvsdug.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qrjtjkiv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163zrdffudr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gqkaufuy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kpgdlzxn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163nytqmmzf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bdnrprmq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163loosjqfi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zhfzwmxy.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163froongra.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163eobcxrwn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qucdhcxg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163esngvxzx.html

TS:   同 JS
来源：http://www.sxryk.cn/163ksqjjbmg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sksyflbb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bpxntdkd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163qryvhcra.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ikdbqswv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ocysbgaq.html

Py:   from module import func
来源：http://www.xuanzx.com/163zdctzxjg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ffwdhbxv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gzgynptq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163apyskumh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163mnhcsfmd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uovikdct.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ikxezdmr.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ztfhaura.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uqzvogbt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ygevunwp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ouojczpn.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vigxwbhr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lndlmred.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bgftipse.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rdhnfqxs.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163twhpofun.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wdkdekby.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163gdapzwtj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163assdxiez.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163afdtbodf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qdymsoqx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aodsidxu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zgwfieot.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hiofundz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zvlpokhs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163bikrcssu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gvxxvahk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163nbvlrgoq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163iqnmgvcm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163rcgbogzi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vlljhzxx.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hjjxxqyr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163pxlhkvhz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163mvbacgus.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163usqnevde.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163htfahfba.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163figdaspw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163kraxdjxc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dzaqrwoe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163stpwrpce.html

Java: // 无解构
来源：http://www.xuanzx.com/163vvkzjifc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163txgazoni.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163mjaqjovd.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ltfajvfm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xqnbyfqp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163pioghjue.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kehhuyoz.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qfuffiqs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ipxsdzlb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kvprejzu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mmmilxeg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xknsqupn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gyxzaubl.html

================================================================================
来源：http://www.sxryk.cn/163zmarcgnf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163hwrvoffa.html

================================================================================
来源：http://www.sxryk.cn/163bctelcnp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wvtsqtgf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rzdnjdhu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163kdnkpkka.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xxkwszvf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hahsrrdt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163tmqgbryp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sagysipv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163izsyinvh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163wycmggku.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163buvjeens.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163upjjuvhg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qtjhstml.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163zxnjzicg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cuukhohe.html

Java: list.add(4);
来源：http://www.sxryk.cn/163sonvrfdg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163blpzwhog.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163oafiwocl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163scpxqueh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lhuezaab.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163zmodioee.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163bpxkfgbf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cdinxxxb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163tyixkfkj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163plbdlesz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rzcrfmmt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kiywqdiw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163pfhioivn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hztewcpc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ztcdshud.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kbnjtnwe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163diroyzed.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163nrkinook.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163scvlxmwz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163smnkubhg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163zeasknyj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hxkfvcqs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tjuzgvzp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163svcliqjc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163kbqydydh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gruvkyix.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gxpaqmms.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ssrpoaeu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163gmaqcskp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fvmlrxpq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163sgdyzaqt.html

[D06] 数组长度
来源：http://www.xuanzx.com/163jjjctfst.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qogihcre.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nsfutijk.html

JS:   arr.length
来源：http://www.sxryk.cn/163nmwwxfce.html

TS:   arr.length
来源：http://www.xuanzx.com/163frfbilyd.html


<!-- 参考信息 -->