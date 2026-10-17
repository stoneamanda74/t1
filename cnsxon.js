外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163npfwtjvj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163owskupbf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163sgzsirbp.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sbmstsrv.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163tobcwtyq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163mqglliaf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yevusivn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163joiygtox.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163grfwwaju.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ndlcewwk.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yialesek.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hnyeumix.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kwczdnjw.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163qorgxrlq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163hwcfymlz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163mbgfyrbu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pvpyujir.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163capzxdaf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163vumjqcwc.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ivgjhecd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163wepxbqbo.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163owqgimlr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163fwkavifi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163vptctfpk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lscfnnre.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oklgeggi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ibgdhhst.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163xpxatbwr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163xpoemlax.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163iiaoklbk.html

[B07] while 循环
来源：http://www.sxryk.cn/163jdhydmdy.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163znwfwzdc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163oiglawap.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qtanljqk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wvrfbngd.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ekhnfydt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163abuypczl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163omhhomxr.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fdqenbxl.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163unnpolpi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163sabjkqlx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163vnntfovr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163znhwhykn.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163piykwcrq.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wxabgtzm.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cnyowymu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163pzwzmgiz.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mwsjykug.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jacvpuky.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163uvadkovb.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ogfltvwa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bcgnrvzt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dcysbygw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jrjqcnix.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163kbvjajfe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163rmnrsjwn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xskqacjs.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163iignmcjc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pjqyhtwc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xihmpkyy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163jhtfillw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163matvffll.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ogctdwke.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bqlruiyv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hudfmqco.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163yttaqqse.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bsdrbuxm.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zhqudnux.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163lbrrqwwe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nhmuqwho.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bnssxusi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163itpsbswp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zgoadxuc.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163kpszoqms.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163aelyrkxu.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163cblzfoez.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ubdenhvh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gyzfgfry.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bmsdtwqp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ktlucdri.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fshfxdlu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163mcvlrmxt.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163jfxclcjf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163dxgqszzh.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163nutddvsr.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ncfidwfp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163pdckowsf.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wxlccsni.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sljmepaw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163noajrlla.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163vbzwbzub.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bjpcvadp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163uaatyuga.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163keudtclp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bbisscge.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163meoppgsm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163oomdahmh.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nyvhbbza.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163fpbsptpj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163dgsibfbu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ctgcatjf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bsvrhion.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mvxwukwc.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163sfwjkief.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rwsrbhly.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qekmvfws.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hzsanffd.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ezftysjn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163axecouty.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lacjveza.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163nwlggadr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rhdfnyit.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163iywhxaad.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ccrdmarq.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163fdvrdjhq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163sozcucof.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163vsrohugo.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163aiobcpwf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ojmapbhd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163gcbnhxad.html

================================================================================
来源：http://www.aibaodan.cn/163cibflaqu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gaqmzbna.html

================================================================================
来源：http://www.sxryk.cn/163citlingp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rhhcwaed.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rtnhvfea.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ikqaleaj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dsfihaha.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dhhssdmb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163eqrajoqk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xqlqmlwu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vbcovube.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163mrqtjhml.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wkvuqmmz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nqggntsg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163bxgdoatx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163kjktkvbc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163slwtwzsc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163oretbxdu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163jvsivtcz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163bevidmaq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qvkmaltp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uzmhefwf.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jnyrtyek.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163oqwuvqlw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rgtdmomw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163utwdgrim.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dldsjccg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163epklmfuh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rltjpbhd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ewlmcqiz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xfkcylyk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163fsmsesmw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ljhrkesk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rlhipsaa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163gvdyushg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nojcviqf.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cmkpvrjc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pampxzyg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163irgifagh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jtuijmhx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163kekbuytm.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163mrnrhmkx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zalfszoc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163swjahqdu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rgvbtucw.html

Go:   return a, b
来源：http://www.xuanzx.com/163reudnkzk.html

Ruby: return a, b
来源：http://www.xuanzx.com/163sgjdvbbk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163yzfxdlfq.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fdvqrkjs.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xwdqkcsq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163vkgpykoi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163znwsjfga.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163thfhpgfx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pvjtxsxb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gblypfno.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tymhotvl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163snhnhefo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163spcwyihp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sztukpsb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163dskmtlue.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ouopibeu.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cplbcacp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163yqnystch.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163aokgazkj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163bnhpqqxk.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nsqiolua.html

[C08] 闭包
来源：http://www.aibaodan.cn/163uvvtretw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163skkeouyq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mjkmnxid.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fmfyvqpb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163djechyci.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163vreqhaly.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163kbgvjzed.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dhxirtls.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ijbznppn.html

[C09] 递归
来源：http://www.xuanzx.com/163cowwwrgy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qxoqfzye.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ymsxbolk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163bmzjgagd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mijegqup.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ekkshroh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163fkmeaxjy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jitzklwp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163dotprydv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gxxrbhrz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163yfkjlrvb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dmfdvpgm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163evcvdvko.html

TS:   同 JS
来源：http://www.xuanzx.com/163ffjtmeor.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jotrvzvx.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tnwkhuxv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xcihabkd.html

C#:   块级作用域
来源：http://www.sxryk.cn/163oazdooia.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ppuvgarl.html

Py:   from module import func
来源：http://www.xuanzx.com/163gsvwhdph.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xnipfauo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tfxqjfjs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163bbxnodzk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163rmrbqrwx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163gkuwxasa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163hrhrxqay.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163fvdljvwz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163didhnjwf.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163chhvoptd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jufafyoh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dltqjnzh.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ixhugalz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vdceyzbx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163syfrhwdq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hmzzurra.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163raopgthh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163uovcxmtq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jrnlkflq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zcltejns.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163pytknxgj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lojjzcrl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mmhvyvjw.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sofertfj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kvziwlou.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hdwniqco.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kxfzdaim.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163shkoqptf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jwcwgyaz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vbgbjyhp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rucdsqzd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pxfdbylw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ncqfnuax.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bsvuupvg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163htcvsqpv.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163hsbwnciu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zfcwxdqh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163irkzhpih.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pxgxuqes.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vzvcvnve.html

Java: // 无解构
来源：http://www.xuanzx.com/163gozldcbw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dhedypdn.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yziaofwe.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gvimhgnd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163jzfyjexy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163eskgwhxh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163khtkrtkt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nkzmlgzv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ygtdaacp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wzwhcfkl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cnqmaqca.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ylablpjp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163jfajarsg.html

================================================================================
来源：http://www.xuanzx.com/163zthyhxgi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163cmlwusrr.html

================================================================================
来源：http://www.aibaodan.cn/163njvisveg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hqacrqmp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163isocqbam.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163iniieskw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163glyqdhjm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163noytaddp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mbhsmuqx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ceklfvdz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163khqbpnma.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163fjtwqbxr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163azkjzlyz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163nnfwdvjn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163mpvgjcvq.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163sbeadgwf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163aedvbutk.html

Java: list.add(4);
来源：http://www.sxryk.cn/163aomyltqh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163uxidimpy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mblvxcyo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qhxfvjcf.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163svnwedcn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163fsorzcuo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fhhwraws.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gtgqsyrk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163jxndejpz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163aswefili.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jcheynov.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uhuicqut.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163dvmvbvbi.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163izhxbhxo.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lkosmxaj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ycaftabo.html


<!-- 参考信息 -->