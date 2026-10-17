外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163oqvtffnz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163tvpwuafk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163jwgiuvna.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ortkkmwb.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163yobgnpjo.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163kolebxhd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163cznqyjxf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rhkzyqhh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163thlwqems.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163loyygczi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cpntgvsh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163tvqhobmn.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kefzbwwd.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163btxaoebz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163tutlyuas.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163witcahge.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jolystrn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zutoxspi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163djmesfdc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gyxoohfn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163waofzihg.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163epccrfbn.html

[B07] while 循环
来源：http://www.xuanzx.com/163slpjnjpm.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zcrcdkls.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ijkdhwxk.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vvtgoppd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yxziayhw.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pjcdztjw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qmoaikwi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ztihsiei.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rqdwpxvu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163rneapars.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163rznmfyzw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163sjdzenzr.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gzxxndbs.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qaehlsdy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jcknhjrz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ncitlxkc.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163isobxovo.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mvdibolv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163etkjpmfq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tvliuolt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ipjkfggr.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163djoyfhev.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163egtqxdry.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163axnovzqw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163thxtnhyt.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gnewqdhz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163evqfpnog.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mzahdgsb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163xqrwpxms.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163xkzndvur.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ysasnpgi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zbzndxfs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163ppknzhtv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xfnjgrbr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qqqbyyzc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163kbflnfil.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163cqfigqog.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nyfweajz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163eoijkpgz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pczlhdrp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wcyxkixs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163oqjkocvj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163osizhzfk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vwzokkua.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jjgczowu.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163wlordeqm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bzbjtjvu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bfmizlta.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163opodhegp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163essmhgbh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163qnmzerbf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163etkvfktk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163puafbhjt.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kjgvglqv.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wsgahvux.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fweenzdf.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163gydhqqfr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163luvzzzrb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yusbawqp.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163tcckhdqd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163gdjlzbhg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ftxkcsxs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vzywlucx.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wryweucp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jjosgslh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qzllkejx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163jppwzsnv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163daptmreo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163igraqvpd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163gahdpevm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163smooxodz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163dspixcpr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163brjownfj.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xycadexr.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163vbfysixi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163tecnegqq.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jvxvdvhm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163dszvccgt.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163iopizbbe.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ilijpfsw.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163upebdwzg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163btkkjxmq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163fyjkyxvr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rlkgclrc.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163dsrfvokh.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163kxbzoqar.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163qknicsqt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163wpyfnzwe.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qcxsdkdr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gbtwpnkh.html

================================================================================
来源：http://www.aibaodan.cn/163mwreahxw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jkjtsvyx.html

================================================================================
来源：http://www.aibaodan.cn/163lojdsifd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163sgqrihoh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nkddnzly.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tokbgxkn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qrqjiptn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pqtjgqri.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dlivlxgn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163uztqsimn.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vrkzjcfk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ycdojpfu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pvzbavgt.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pbvlvtxl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163iojlzmli.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zricgmoq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kqytwmcg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163xjofejmg.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zlewizwm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zlvngurx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163kmiygzsk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163trwueaep.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163opsdqpwx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163dbxdaegn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zxnvswge.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tbjglvwc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qcsrebiv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163vwgpcmld.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qadzyjvl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163eqjycack.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ibccxkfe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163myauvfyb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qdpabcab.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163jdrimwor.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163devwqmjc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pmeeeasm.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xlhdbloa.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mzlcvdkt.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163acwdrbfr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qodkxjeg.html

Py:   return a, b
来源：http://www.xuanzx.com/163ltjafcjm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zsqsaoxo.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kkbfnrwl.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163lkqtgped.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vwaudyrg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163tgslvgsp.html

Ruby: return a, b
来源：http://www.sxryk.cn/163nkuekyqp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163oeuhrklc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tcejczbj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163upvtwjrz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jfwjzzrt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163osmxfpsn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163rgjtaepv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gjxjapkr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163oskqbtke.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ltggiscz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163penuhwwa.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ukpotfif.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163coofqmcc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cjtapclc.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mkxsbllh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163covaguqy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fbecovyp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gflswmfa.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hwqufiwd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163chfqqjlf.html

[C08] 闭包
来源：http://www.sxryk.cn/163vffjlxfj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163kefgcbrj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dueuihfi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sqizyvoh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mttvsbrw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163eutumtxi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163kcynirgr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163iafhqzuy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qbdeaxbe.html

[C09] 递归
来源：http://www.xuanzx.com/163lianlkoo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163sugyxtpg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bujuvswo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163atgbvjzx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dqlxxzzt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bupsdzpy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zafolhbt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rygoqoyu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uicmwpqd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zywfmmwb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163sjgsplsf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xtrfjhto.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163lpswhzhc.html

TS:   同 JS
来源：http://www.xuanzx.com/163vsdqsiao.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fymfuisr.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163yphziuhe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hvpuwmit.html

C#:   块级作用域
来源：http://www.sxryk.cn/163kvvfqfaw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163gwnwhiuy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163vwbyugvt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163egsviemq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163tigjycvp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ypemxjzz.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zeokhfqh.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tccjqyzl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163txftatnv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vcbbtdjt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pfdiqvjn.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163kaegluvc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tjhnonng.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163moguahmy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jnotqhsx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fvdgqvpw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163efaxtpij.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nnfamwok.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yhchvcxj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163umobghsj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163mhfnhqcg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vbrflrza.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163npccaeww.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hivqqavj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zdulrgvc.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163vwgrbyox.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163lgzjuegt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ycvumlyd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163snvwghya.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163majcvxeo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163yfedayak.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163feoklrku.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163encchsmi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163nkhixwym.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tcwygsgu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ujyafvws.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163mwqnddfk.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163orleutri.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ushxobtl.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xeuzqmfh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163xqahsnix.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163jbkjfdxg.html

Java: // 无解构
来源：http://www.xuanzx.com/163iomkdlwl.html

Go:   // 无解构
来源：http://www.xuanzx.com/163orbsvgiw.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pzvnwsje.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xzmrpbfw.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163urjyawag.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163gtarpvyz.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sobdppvb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163feeypevo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fmrlddyu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ahmeggta.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qerxjxiv.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163llmhcmya.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dsfiixyu.html

================================================================================
来源：http://www.aibaodan.cn/163hihpemer.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163dncjjvkt.html

================================================================================
来源：http://www.sxryk.cn/163bqdzhqhp.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ylgystgb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163wtgdqxlt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xeqoiart.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bxnuhlqv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163pbtdvkpw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rppcbmvy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163vbzkobqz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ntoxinvl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xychnjll.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ylwdzpeb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zsapbwkn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163anqauqde.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aynvxyed.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163lajcwkeg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163hpgtuwqu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ybfylaqn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jxpxupsd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163exljlgfc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163samiigmk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163bbzdzzto.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vwvyjkad.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rhbucjpk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ntfsptdk.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qgprrovi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zckwrbro.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gipakxek.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rvroawrk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fnuowfrm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zccbzxjz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qwxtgica.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163vagoahfk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lcjglzko.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mrfskkis.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mbthdmxk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mkbppcuc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ryvfspzt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163sshgcwtq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kgzwyvuk.html


<!-- 参考信息 -->