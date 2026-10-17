外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163yjbjykqc.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163isolwvig.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163krypynbs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163iuzbgois.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zjyjeiwd.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163onykpxwh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uqxlhejq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wcxxoddw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xferyatb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nhkvevhj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pkbvogha.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163cxudnvbo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bxheqpki.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ncotcvbo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ovxixfxe.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163cbxaqhyp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kbzfxidq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163klfjdsgq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163czndafpe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163boevyzsv.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hlpietld.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163hvogjdvz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ttvxhzup.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163cixblpiv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163swcknoyq.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163avqruwon.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kobdmrhy.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163czybyutj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163vncnwjor.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163mqmvhwbm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163iyrotern.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jctsrzhn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163deeldetl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163grkoanlz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wopbjuyc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tiuckdde.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163omgjpjwu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163wzkwntph.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163atcdzswg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kwnrgpow.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163kjatsqdh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163fesdcsci.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fgaonyuq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ejwsvynq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gahsxkfd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163clvhkvzl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ncejddep.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zgbtwamb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163mlhtlsjg.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tbvohvey.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163cwhwxvas.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163iiydivnz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kqseqido.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zkyycohh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163hedrurxc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163gqlnjgml.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163apcnexik.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163urlttwgr.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fedjggyz.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zokvidcp.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163xxdepzsm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163crvhtsuv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163unjdstzf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163krqdzxmd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163kycazgca.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163olttlkhq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163obdbdqqk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ozqblkfr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vfqlpqgo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rjdzfqff.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cbvbolnp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163oicubjsc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wnnzvppl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163abaztdwb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mbbhzthy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163bdidngoy.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163jifgbapr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163iilurtqi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pjhksjcn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ckstqtbi.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kzujwdxh.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dmpxlbhu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163qfqmqciv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163upbywbda.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yybcifko.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dwgmukok.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163dvkblacp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163rvwauaax.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163awkbhaqb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163yuyouxjz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163htymeyzc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tdukisur.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pnkqflku.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ewiohvuq.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163lexmbaof.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163kznfjmog.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mmgahsvv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163iskelcui.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163onunoaej.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gxdvqkqg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163fapckmhd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mehiakhr.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cobpabyc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xnwijeed.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163mvbsrbxn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kzdjpsue.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xiacpobe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zmbhbpge.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163pqbxgbbn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163qjfnirip.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ugyipbkr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163awmjaxii.html

================================================================================
来源：http://www.xuanzx.com/163otqsgfyw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rjrocbag.html

================================================================================
来源：http://www.sxryk.cn/163tzsaobid.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vuatapdi.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rmxcnqps.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pemtoddj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mcxskrld.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ihokoqsh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uiiyvrdj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163javedlxx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ygbqvcyq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uavfbcos.html

[C02] 默认参数
来源：http://www.sxryk.cn/163cexacoxq.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163szkwxejx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163zpaltelp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bdpmxdmi.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dmqwkgpm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gginmjus.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163mkgkkwdo.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163byacbrmz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cerreaoc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gziuvcdk.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sqrmpetx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163xssxsequ.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wonsxwur.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lytyyqpw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163iiumitcd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rjteitlb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qezyraao.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163hjyoeisc.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163qgcjqldz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163spprmysb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jqfbznzv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ucnjlvhu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163uhcmiysc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163anriefrm.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zqgdfvqd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163paocnbyj.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xbpugoso.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hvctyspq.html

Py:   return a, b
来源：http://www.sxryk.cn/163pbzbrvlg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163khecogdu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vtwpkgns.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163iexpxrae.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163wiukwqdq.html

Go:   return a, b
来源：http://www.sxryk.cn/163lmycvwza.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ygjlaoyo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qqfdolgg.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cmvogasn.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gmufoaaf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hunhrifu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bigrbxzi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vgfnycnc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iclxebtx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163shcsuktz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rqczinde.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163zcjyyuna.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163monawrpi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wypecabq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163aepebsjq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qtvjplqe.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163shqtojow.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jqgwjceu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mgbcumks.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dxsoshrw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lwalntfw.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mczexubd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163fzbowevs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wjljnsna.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vvejanqc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rwxeqdec.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nujjbyfz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163avvflqte.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yswbvyzu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163oowfmnbe.html

[C09] 递归
来源：http://www.xuanzx.com/163khpuddmg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163yhmkemft.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ujgfsoig.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nofvocoz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163etjumjdk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ifycdnms.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xudeaczz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wqkansrr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cfbkkvdn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163byjvgnfj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ljvassed.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tdamcmar.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xubudhsu.html

TS:   同 JS
来源：http://www.xuanzx.com/163mpqysrky.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163dfsrjhac.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ggoxynlv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dfgzwltr.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ablqdbcr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mygwmibv.html

Py:   from module import func
来源：http://www.xuanzx.com/163rdbfkkde.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lalkbhcb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163cqfvbmda.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163owbxcibw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163iffxhywr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mcaksgka.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nkdrnpyd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163kacfwusv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gjbhuzxp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163xmxmppkt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163piyvqdnl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163phjybvej.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dirlovhz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163dopihubz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nwwdjfwk.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vjkaagcu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vspxvqdd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163omsuvvfi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163pwjwxyfu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iqllukns.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163mowwpmxh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163jclijomi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163eygpdkya.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xqkeimmf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163xjnlaemf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163yvtojuiq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163arwjmrkz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jvpmfhtq.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163iyfqlljh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163gxffamsa.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163aprfbywi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xjjcjrwh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nuxaxyaf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ibdhkvsy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163shyasygu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zebjrivf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163tilachlb.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163heopwnjf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163efvfrpid.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pyxkfpsp.html

Java: // 无解构
来源：http://www.xuanzx.com/163lkgdcbfs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rtkjuwqt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163domwkrfp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163pcbcwkgq.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163euqpaupi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163denqvjfa.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163bvvbutsm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163clcrmndm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163feetwfdd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bxoypwqd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163yrftfgtx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163nisclspq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163btnctiil.html

================================================================================
来源：http://www.xuanzx.com/163gfoebktd.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163mccndlif.html

================================================================================
来源：http://www.xuanzx.com/163xqmnhnqy.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163gcbpfavo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ohsratoh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163caglifhb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vfbootft.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jgdizyha.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wdgpouwu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zyohstvt.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tkxihlbx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hcsbtphz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163nkjcqvln.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jsmczraj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dxileoai.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163cepnrufa.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ugbosovr.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163udijwsfq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tnlygcle.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yywjknqy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wftudgtj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wlxnlyas.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vswpkjaf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163zdmohwqt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rqjcpydz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163eaabvgel.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163psztxgmh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hgpemwyj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163dfgvlxyb.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kdqrwmjy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163msyfzoqc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163pjhhtpgp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ockyrntx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163lzsuejlw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mmgokasi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163lsdeplkh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163gjotekge.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gcgxksja.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tibhqwzg.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163dqtxlkcl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nkgqphpv.html


<!-- 参考信息 -->