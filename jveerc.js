外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163lfdiynvj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163igwtkqnb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pbhmbxxu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163mxxryylv.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163aohsgwpl.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hbqhiqct.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163fwsodcpd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163cjiiscau.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gmappymv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163fiqhxmsb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ipvtomfj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163htnnmdmh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jkmzmjwz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lbxwsfyy.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163prziwzkm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hiitgftu.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163prliloys.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163rmmzbdcd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jorinfhx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cqjeaotp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163esombyhj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163itxjystd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163aeuosirz.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163rcryxjbq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163pkfnklqi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163wgrdijoh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163cnezpmxw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qnilpvql.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163sxkhnpux.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ndbrqgzz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tpkbxleu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163pknuvpdx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nfrtryvt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163pbgzxqer.html

[B07] while 循环
来源：http://www.sxryk.cn/163wmtmskte.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163lejtqive.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163vnvnektw.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vrhcyrgu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uxlvwqld.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qjszquei.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163klfhgblb.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163nkdtwqkv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bbzfxkeq.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163tkojoxel.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163lxhsztdp.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ixybfdcf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fgcdvguh.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oginwwlp.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qzzfnqua.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163nrjcbcac.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vldagkox.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hbmfsmzl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163jresstok.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163cgdsaded.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gjqmebzg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bjcpacit.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iyrmejmk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163clhmgeop.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cbujhdsz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xoqtvtso.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bdfdatzg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kmhxmhiy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ougdexqs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163laxcasrd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163tpqueejn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163mxxxqfak.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163olgzmvaz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163udjtdbdt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163oskabecj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vujsiwvg.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ocvmaxgx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163sahchgnf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kliiewxh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wxeoujgj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rarlnbik.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wrvlgnyf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163venlnhvd.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163oswyfdeb.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tbrqkkrd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163hovzqxao.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163lckhxdwl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163afsemfcg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zjvtlhvo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fcgccnsp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163krlvrefd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163hvhikleh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163evxxbgak.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163tbgpzvyr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163aiqdzzij.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hwwlloty.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163sbzzrbkf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rrmsuovg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163geizkuod.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rtxuybgl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tldrdugf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163mxpvlwnz.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ilegiutn.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nfwkzgxp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gbmwvrqw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163wumkdufe.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jqnhnxfe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163acahintk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163zbhkvoqa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ficzfrsw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163inhzxzja.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163jnkmulwq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163qkegccgs.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163vxhugczs.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163cbbrrfhy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ppemujzb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163jeowfmtz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cbqykpix.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jxhvngzn.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163yyunpijb.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qotjthfl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163aygjxouz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tdtujhlz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mddipsfz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fljosjpn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dmfvnnfo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163dhyrhmwh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bfpsyjzx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kjuiliwn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ydjdtxpz.html

================================================================================
来源：http://www.sxryk.cn/163uwldrpfc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163dwwwkkna.html

================================================================================
来源：http://www.xuanzx.com/163eciemxrj.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ygduboky.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163fpkyjcmt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lhjbhrke.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wmsuihwk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ntuwedie.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hiupcege.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zjcvipje.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163fvsivfxe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163coxirxdt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qatuzyhr.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163yhyoiroo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163exqhwcgh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mmhmkpxw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kccujhwa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rxpovsvy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jlfnppvn.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163aeswjhed.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hbgbkblu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vgahrwzv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hgdhiwnd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163pcfnfvyd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qtqzfeyl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xdusozzo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ihhjijmf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163zmebzhzh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163raqyrlym.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ptnirotr.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dpcnaifx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163tiojgtwh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rbsajjef.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ceofbfrm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ajgfmhzu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hzpsashz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ottjveqr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cyklbhpe.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kgjakxjj.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163czmvhlax.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dbijixxe.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163whtnaafr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163exkvsufz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163drelhlix.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jcbbjadg.html

Go:   return a, b
来源：http://www.xuanzx.com/163psnztpen.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ogzsuaif.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cpqlkplt.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163pennacpn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mkrbmbwc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nrrrjmxt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163jejsnuje.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163geovapja.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163bxlovcno.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wtzlghmt.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tplhfxlo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kuvfztub.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163urmfuxtg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dibtatkn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163olcsvynn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163mehygjex.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qgewgomm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rknzuive.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sdpcswrt.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163kdqbueqx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163aevkfrlw.html

[C08] 闭包
来源：http://www.xuanzx.com/163ymwuhnco.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jbmtoxnb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yigmodbj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163geivcoct.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163permuasw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xegvleyt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tbrzcacc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163etphkntm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163imilfwkq.html

[C09] 递归
来源：http://www.sxryk.cn/163pgcbhbjf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mqonihxb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hqbblppu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cgjbbdzg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vdxmzhbs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ytzzzsrs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gmgjhqss.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ntiybydp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ctfnpoqm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163tgklwgfd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vkcxnlhs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ymieldqv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163pdwuqmym.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zwunbxwp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cipkweun.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dwvclrat.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163kdqwwxbe.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163vvuhrble.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163kebnywah.html

Py:   from module import func
来源：http://www.sxryk.cn/163mkdyamoc.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xxpbbyka.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ztddawzd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cigmqrcc.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163lhujsqtr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ldvulekt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163whwjffvc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kachmesj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xnmrytis.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mrofhwhz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163pqfimrwd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163juzrxmkt.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xcciunzi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ppkwymga.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163yxlzznku.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163yvrrcwdj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163igiqmvwr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163iapucttr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163abzcftbv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wyqhvaup.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ziqgecyi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163uihflbgi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hrqbomyk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yfdvssra.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lwcigsof.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vvikssny.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yowshiyy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163flaerjuv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163isugzhxw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163aoncoysw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mwoglrmi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163afpgwmxd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ybnaxlly.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bnqevcce.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163echzeyvs.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mqsmrhqn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kcafjkro.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163puqdnlru.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nswemevn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ljrdntjr.html

Java: // 无解构
来源：http://www.sxryk.cn/163joxnwwrj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163gadceyax.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163sgismyvc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163twhnyxpx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lzdkbxtf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163hnhuqknb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163sqdweyql.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vholjiqy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163gymxeale.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163nbjihobw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wvbzxkfv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163rfhpegdu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ugstvksb.html

================================================================================
来源：http://www.xuanzx.com/163gehwudpd.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rhbmpnbs.html

================================================================================
来源：http://www.sxryk.cn/163rnwxqiqp.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163fzfpczii.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163hhgtmcmh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163twbuazqe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dxdgtwnq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163uqarqmbo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163uepcyptm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163qgtoxxto.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nnagrdcp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ivedwgzt.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bnueqhre.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jrmuzbim.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qwktxhdc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lyvupeta.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lrwlvtah.html

Java: list.add(4);
来源：http://www.sxryk.cn/163jiemrkjs.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nzomqkrw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nltyudfg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kdtgwvgb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163assazihm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bfotsxbp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gswvgprd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kjftqmod.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ptxnrrgo.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rdunsetp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163pmedqkos.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xjchgkyp.html


<!-- 参考信息 -->