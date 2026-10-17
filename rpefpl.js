外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163rgmribuy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163dxdjfzhn.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163loenagmr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fpuytdth.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163qvoewxaa.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mracmcgd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163rxsizdtj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163dljvjjdf.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163bpsckqax.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jocreutq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163avvgsjja.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qlhmmzuv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163soiwseej.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fbeealgy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163bkahdcer.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wukrttgj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ablbimgd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163mhyzlqea.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163pooinmge.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163tnktmqps.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163kgcfuisq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yeboqdbb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fziefivd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163mgkahjpv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vgjxlran.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163wjwhceqe.html

[B07] while 循环
来源：http://www.xuanzx.com/163djaqoqsq.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nejptzel.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163dndfonxr.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163intfwjzg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xltkilzx.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xsofofks.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ghqqesgv.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163oaobzgfk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sffznrnx.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kvknskgf.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163nkkyvokl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163eyukogaq.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cdqtsvyb.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zabghcut.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163znwfoxko.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163yqgcugxw.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ohlkfmss.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163aumkwzuz.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nwzdummx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jjurqdor.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ndxilikh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ogpskkvi.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cwxrpunf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lwfxlsfb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163puseilfq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163fpoftshk.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ogsouvqy.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163bcmnpqcc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163fvfvvony.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tpgeobwq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163igaqutgp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163axfbsagz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hrgpcdgy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163fikniyka.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163sbybhnmx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nbqxsmpq.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zdegcglq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uzxkegav.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163iqxdkpei.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163douuniyt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xhrtfisz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163wncvhntk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163mqlpuone.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163aqfjxicj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qrriduxb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bgkhklnz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163mjatsfde.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163mqieannl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lrdizzpk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vxqrckpw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tlabrxpn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163nffqkqys.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vmmffgzc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163soolekee.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163kyrqvmvr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163qqrueuaz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jhbpswzs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163omihcvdx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eayzwrab.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163pwagcvjl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tmycrzzb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163vjaydrht.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zdnannyk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163srwzzrol.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163etvvenfx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163hmifjksj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163fxpsdqxa.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zdndqxzc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dldlhgwl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163lpzvgsfl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163xyxoiofd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163yxrdfzdp.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uubmgpwq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ulejcapp.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163utmleczy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163pmpxihic.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163oyqdirrq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163prtyswzn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163vfyytikj.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wdptkyrm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163igntgaqk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sgfsvfip.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xpyduquz.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cqhlvuuk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rmjkvtsu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163nquamiff.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mqcfbrsh.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vlnadfsi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163vfcgucxk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163oerumbhf.html

================================================================================
来源：http://www.aibaodan.cn/163cyffqobd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mpsexvdb.html

================================================================================
来源：http://www.xuanzx.com/163zoaemugp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163droqhtwr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gqbslqxz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163infphomq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rfaxaidt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eqbeagbj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hghkkdnd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lycbteyh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rkxozgmv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163aceedqdm.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tmhkbrij.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ywicabff.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fhuwkybd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yikviwrr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163piktokmw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hwdunmft.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bdvqinnh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gfzxrwjz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ltsiodwi.html

[C03] 可变参数
来源：http://www.xuanzx.com/163umnsaypv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bcaiwedq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163evfoaymf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xxbgztit.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jncpxbio.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pkuzaebb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lonnojex.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163fntuzqfo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163batrccek.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qgmvlowr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163rxpwutig.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163iclfvsnh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bjnfofiw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163dgpcqizl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163islvuoek.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cfnlkoax.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163snsafhsf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dvyvnyhf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ntdrvyup.html

Py:   return a, b
来源：http://www.sxryk.cn/163bxsarnah.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ogpdkvay.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vibruwfa.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vyudecrp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163rdkbupyj.html

Go:   return a, b
来源：http://www.sxryk.cn/163hpelndab.html

Ruby: return a, b
来源：http://www.sxryk.cn/163izihxopz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163olegaggg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nfohqoxf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163pqiuhjrq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163pqycuvnf.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ymttjnmh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dnvgzsug.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163wqhymomk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163eqhkulig.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vdmqxdjt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nicopaqw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163jjwcrthp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163csukhdzf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163fhlcxqyz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163upunygik.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163pyxmfdeq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ysdbvlew.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ssyutuvg.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163veiulilr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pcmbaajq.html

[C08] 闭包
来源：http://www.sxryk.cn/163diskncks.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163pmbbwwem.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ohgyguwr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qxuqbdyh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hcljkgdu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163sqjwplec.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fliucwoh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tquieumq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163asxsxeki.html

[C09] 递归
来源：http://www.sxryk.cn/163vyboektu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lwrnpfvw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163acwapult.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xzbpxqrq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yeuhqrxt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163clxpwzlj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iwuxnfez.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qwvwphkh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pynbcmcj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eegirurs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bofqnqeh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163sozjlskv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163goksizsm.html

TS:   同 JS
来源：http://www.xuanzx.com/163ajhufpqw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163mlnrocct.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163srbulial.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163rsnxlrst.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oacyoxor.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163nkqvwelb.html

Py:   from module import func
来源：http://www.xuanzx.com/163hqagkqoo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ecflylfc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hqegxqtl.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ftfuuqwd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163bccaymwp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163cybbavio.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163clfmbtri.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xugzvdwy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fauormjg.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ngbasstv.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lzrwprmn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163slzdycnb.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163obpbwqzn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163wgvnjtqe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gdyhvofx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xstdgryg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163hqtuoudh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kadrwmtd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tohgctnz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rtsllcsh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163xmahrbpl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rdwvgvra.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sxxghpnp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163izduvlxu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kssmpker.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cfkafmxs.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hhvmndur.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bgqonhrf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gxuyhqcm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qydwgrmh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zhjlwyws.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163inqzwiil.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163vprzwwkv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qwcuwytt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mdufacmc.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mfpnlnes.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163zaznqnwc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ozkvpmtc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kluafzys.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fuvacdbo.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ixmmomwo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rccpmhzx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163upsgyfib.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nnfzkluk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hwpqndju.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163zcuyijcz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163nwijyxhq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163canzhsbw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zoaterdr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ocidysyz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163sabeszxi.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ytwmwnjk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bfxcumma.html

================================================================================
来源：http://www.xuanzx.com/163rqrqrzvt.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kahzzpil.html

================================================================================
来源：http://www.aibaodan.cn/163qhdjvbew.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163quvotows.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qjzlqoxs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ispxmfiu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kbzrotsx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ycbeeskz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nrzcoltk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163mqjrmyjb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fjdbyofy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163iqkakvqi.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163updqqcoq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163myzkbwsd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qnsuabaz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zwpbpwbo.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163awxkqxkt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rwomcbfp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163fjbshzxg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163qizeztsj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ztduical.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163bodpwrnn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163odohcboo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163thwuzqzz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pwotbpqc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163raimcmhe.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163gzeujjuz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uwnkxqcp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ascbkpdf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163akeiyqrp.html

[D04] 删除元素
来源：http://www.xuanzx.com/163htstmglu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jsalxvzk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163eteqwwdu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163pazxuzhp.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163qjdmrijc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xpcppyqr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ivebkiwp.html


<!-- 参考信息 -->