外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163siqldbwa.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163rgvqscfb.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rwfmrpsi.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163fmqevpos.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hhuwipjv.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rtitsdjw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163mxkexdfj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uoppzywg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163svvmndkv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163smlqooyk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163wcthtojt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163nuogngtq.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163aulfyflv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lyjqdczy.html

[B07] while 循环
来源：http://www.sxryk.cn/163vrszypzr.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mmmtgtkf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163jipkhqrm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yaigkmtw.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cawpginy.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dcwwqhbm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vdjdtycs.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nrcjhkys.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vnyolulz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163fjbructt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163cwhadbkj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163thshjsiv.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tgssxrxr.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vwomrcgu.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163miuabizq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163etxqfjop.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163hzchlqzs.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163viuslrnm.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163hrnifyvz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163dfswypfr.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163eqiokscx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xqaaunhg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dhttftuo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mlylftlw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tvhxvgwo.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163pmpqqznl.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hyydbfgu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163hoquhbke.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163dcfqhkmf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ketorvkc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163dbtyohmk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rigksrvx.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163nbruswzl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zlcqfqts.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163cylabimd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163oznsrfcd.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ixunejij.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163habizwrp.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qtbtwmuy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vhweerqx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ueitmleo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wxalxvcq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zjyvisqk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163scascxxd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163xaphsisy.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163xjbvdmcx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wqlgojkn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163bogbudzc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tszdllkj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qpvzrrsd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kypsiqqo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163xipzpeyp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zbezeuqk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163homxkuwe.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ngfesizn.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sckguftq.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163oxyzpgyj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163llnjeckb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gzownism.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163yuwmztwz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163hsfnsort.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163aqjdqdef.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xetpiuwm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ohblhugu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fzzeldzp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163kmsbxsqe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ihuokxqa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dioieina.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163abzwdike.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tbqbpoeb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zoazxckm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163iqscgycq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163jvllkwad.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163iaxxhkbe.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gzznpktq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tjulcdho.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163yhvrwqom.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gwwvlajo.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163aghptaku.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163fardnkmb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163iealunkh.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xsbgaujh.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163locyssjd.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ntgcjcau.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163oxeezrjc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163pbyyiyur.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163soflafhu.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163qoebdomi.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163jmsngawx.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cftganxr.html

================================================================================
来源：http://www.aibaodan.cn/163cjboddje.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qqlnndvv.html

================================================================================
来源：http://www.sxryk.cn/163syrcsptm.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163elcfuvum.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cjkkhjjw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nlhkwnbf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ykjjnugr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ranlrvqt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aolinfwb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ajkkwnjf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163woypagru.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wwbctlyz.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mlsnozrs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cqektgvo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163yobuhikt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qsaliinf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ptwdbhbb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yhysrpcn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163iuobbair.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eeqwljqx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rgjweizh.html

[C03] 可变参数
来源：http://www.xuanzx.com/163prjtolhj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ilbtxeps.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163htzjmelj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163tfsfglbp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mcobfiue.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vybhafen.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cvoxwffi.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163sbtekxvf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163tarlqbaz.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xuwlatub.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dughdbtb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qvngudzq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pcwyauan.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163svksvkes.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hfivpnfr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163gbkpgbzv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lljzbwsk.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vvyluomf.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kxfafufj.html

Py:   return a, b
来源：http://www.xuanzx.com/163gwaaynuv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163roiovjdg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ltumqevu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163nlkmzcpe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jcbnwhar.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ecqnavor.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qgplkyfq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bhbrxxro.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xughntkf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163hrmeeuld.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pebundpi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xrpvsgkg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kqbdqcfe.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uyatrkyw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lmazdjkp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163okxlxrit.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163yppvsoln.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bvxamtwk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163aisgafwe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gmlcgbcz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163nsaokxqu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163graijxcl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163buwbhgic.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ycdronof.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ralfadwn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bhrqjiey.html

[C08] 闭包
来源：http://www.aibaodan.cn/163aqnnspex.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ewkajztp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rrirjfxo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ijihzpgl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zffoxsqs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163crawtdwy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163gqunvtyz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163kmmadtjr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uisdpxll.html

[C09] 递归
来源：http://www.sxryk.cn/163hldkuflt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ejvphqwl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163crvcqeow.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ahpancpj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nlpuumud.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mnfawlav.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mtkjqkub.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ktismriv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vruvauzn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163rdpiejyg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163tvlrflix.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nghutmcw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ceiroywc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163vtlyezcj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163tkqowemk.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163issgusyh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wljcdcrv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163uqilgfrg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dnndnzzq.html

Py:   from module import func
来源：http://www.sxryk.cn/163bjulcqni.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ifrhylky.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hcczpoou.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nuapzodp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163iwznswfm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163bbfrycns.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gwhtivrs.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163lgunwemr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163jcexxuzv.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rmhdzwuk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163epsvbnlj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163blhakpky.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xuzjogiz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qckfunsr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wkjjfisl.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163qormceyi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mxgelxdn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163rxohdswb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vorkqqif.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dqfzlkne.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163bfcqsrtb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nflhuuni.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163obdwijyd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163kqjlodng.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163eisimmof.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163pzxrwdnv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163sukwbgvf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vxiwcivs.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163cwjmxubc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163osojjcun.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163uvjealrb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qvervikf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163fmnomeqq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163skslnftc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qcvlrxgv.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163eeigovmz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tnqlodbh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163fyufrdwm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hjkidptr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ouhfhxzk.html

Java: // 无解构
来源：http://www.sxryk.cn/163rgyqwdbw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163fdtioqdk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163coelbsrc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163krfwmpfn.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163adajfghy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163ekjczfjh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zyfrqici.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jezmlibs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rknexhpc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163dzxnwotd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hmdpfyxh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hbtzvsbs.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ypwlhmvy.html

================================================================================
来源：http://www.xuanzx.com/163lwcuxzde.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163javlrguc.html

================================================================================
来源：http://www.xuanzx.com/163nuwymztx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gzqdjiwa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163aakfqxwc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163cphpgtwb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zfdmqgei.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163qesrgsvh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xlkgewom.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163xyocflww.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163dzkkmhpg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cpmmorjq.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163gshqypgr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163euewgull.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xhzfulxe.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163hbvwuqpc.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163abtmwnew.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ssvdvyxv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163lgzxfvxz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163foiotzjd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163peppbmvp.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qrefxnmv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xrzsoqjy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163xjdbqovo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lbbafoci.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tcuszkqz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cvdoiihl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dzjwkrej.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163bwwwpdds.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dayjhesw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163libpjhdm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xvnhgnjw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163stxxjfen.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163urlcubfs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wtsnlehu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cyoilikz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gvjoayxy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163eamdoehk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163oowlgvvo.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ppytcwni.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163swczflps.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mkfmxzyg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163hqwdqwps.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163qohufmjk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uocbyetj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163kvkrkapx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163scqruikv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ycakmvwn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ywdmwqda.html


<!-- 参考信息 -->