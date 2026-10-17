外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wjzzncca.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ikwhryhi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163vndlxkoy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163laryjodk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ubydimcm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163hjimpuiu.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163llhudgci.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163inuuunmf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163twbtonqd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163hzktkbal.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ycwiwbgc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163goolxcmj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xioemkxm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163coudyepg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163rttddkyy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gvokyjek.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163fowzttjl.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163irmgxmvo.html

[B07] while 循环
来源：http://www.xuanzx.com/163khdhrehu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163wzkkgfrd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163manbatik.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uaxzreel.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fpkskuqd.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dqgjwdvm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163oqpfiqnq.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qcwqamnt.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sziioizk.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163unwgiyki.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163yvzbvfih.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163kzqymtgn.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xqeivtnt.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sowfeddm.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nfzmsjkx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163woequmxk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fsxnrvzk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163prltgkak.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163scqqtonz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ujbzhccz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163yxupcbtk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xkmaldga.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163egmtzwcr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163luvbdmyx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163wgmvmbwy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163siolgjpn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yjolcauk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163vccquibt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jsduiqya.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wfkensgi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163kfjoxzdf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163fbgqdbrt.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163angyojno.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sfumwuri.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163encvhbjn.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kitjfqtv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163swmkhkdy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mosxbwxc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hunpxaqz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vhphdrca.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wtvelrph.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mjtmlizv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163zrxxsyrt.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vofgwtxi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nllbvamp.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163gxrtstha.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163nozanhmo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ushfbmrv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lttvhlbv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rbjoohse.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163avuarpam.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bmxpnect.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lnakeezo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qyjnktpi.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163fymohmcc.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163mnqsshwo.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163tnitzaux.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163whjowddp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cmzxyjvq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fjcddpke.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pfdlwvbj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mwsxbqxa.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163jkawsouq.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163cuvcbyaz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163gjisqoto.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163eqyykezp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163qxodckhx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cvfbbekj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ardizxyi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163xiscdvke.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163wxilncxk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163lycxhmfv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163jvpxppps.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lagcpqhc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163iiskakhs.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ynkowpmj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qgfrfdoa.html

Java: a && b || !c
来源：http://www.xuanzx.com/163utuayoye.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163udrxwqyq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163csjgqtic.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163tkkpbyxn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163msmlzobp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163momesmch.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qgaglnqg.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qrkywlic.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ikcjkvvp.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163rfuuqvdq.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163hjodsurx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163zzxxbcqa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xjipjjjr.html

================================================================================
来源：http://www.aibaodan.cn/163ggbqqfmf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zqentznc.html

================================================================================
来源：http://www.aibaodan.cn/163yoounspp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bnyuexbr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163lywwntsk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zxejmcly.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tacjaito.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163doffxubt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zfsbohts.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pgkukhgk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163yqvysoui.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nwlwrdui.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ajothxxi.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163iwngfndh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ttfuhqsj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gksbssle.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163kcvgayeg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163kqxogtjj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fmcarmcz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xlixwtut.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163cjziycqx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163efuavdzb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fxjyskkq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ihyrljpj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163invpxdbl.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ykolgmvc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qbvocyxo.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xjffgopz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kwixnbti.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dgrwwaxd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ghjwgwty.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ehvmdjtp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163unqsqvyd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fqydnwxq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163kyaydshf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163drbfyebz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nckbvbic.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fyosditr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163uvmtfkhv.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163txaczcal.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zqqdfwxx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zhvkcemx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ihwqapca.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163eursujvx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rbborbdu.html

Go:   return a, b
来源：http://www.sxryk.cn/163xughnrja.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kxdoxuia.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163jhopkjzk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vfvunzbl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163nxmfuhky.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ilygdtdw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163pbbljogr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163sytgiwhm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ickogpdw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gjxwjlzw.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163iykgcghp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fjhaiztk.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mfxkwhgx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rmusocho.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163bitgavng.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bpvbmjta.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163aczcwzew.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nznxbfyw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wbesxmue.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lqabbpns.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qlemveuj.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xzjgtqxi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qhfyxzon.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163aedbnezu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163czuzjhka.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163anrtjwnr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wxtdycfk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163emuzjmik.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163himxbrgp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mrrkazem.html

[C09] 递归
来源：http://www.sxryk.cn/163nhzxludh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163lkditzyg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163igqhcokq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gpvtecoq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xzodtfls.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163wjrvcepu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163todhftvz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163qottopcn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kadmadde.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gruibpqk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163uskcouhg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163deljeuxy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163teyknspq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163kxfeygaw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nfexhyrf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163woyrdqzp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hofpfpvu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hjqumtub.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163acyavjjd.html

Py:   from module import func
来源：http://www.xuanzx.com/163wjazgnvs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163upmmpgvy.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163nkitkzyj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tuioouji.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ajlobdyk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uhmiuhxj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zeywdrks.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163havmfuqe.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hyajuwdg.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163swfqtuia.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bvdrjisy.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xgpukzbr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163coxuncbs.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kizlsftv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163uzgvvgkm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163daduxsuq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163invnpkic.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xlylhdfh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163nyvhnodo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163eqahodkm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163katxnrfu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163irphlmgp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hbasvdvi.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ltignntz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pzfauhcu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mqedspsd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163okxlbnbp.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tsrjnsne.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fdoigtke.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cnophsvk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163acdedfmj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163herrgjwe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ktqzcwhu.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163aaijamfk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ogdyinme.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uaxwevlh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eclgehwn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163qtlociwd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ezjmulwr.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ovnmayow.html

Java: // 无解构
来源：http://www.sxryk.cn/163ylvntezn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jtmjnbus.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vjboqjyk.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zozqgdcv.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163eymeoacg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163prgpjnwn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163xiyzzsps.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wzdicwty.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zpckiigt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163vljmebrm.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163hoiuerwc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mmkgqndp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163palrlfby.html

================================================================================
来源：http://www.sxryk.cn/163yusbdsyw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sabvwymd.html

================================================================================
来源：http://www.aibaodan.cn/163rsliwikg.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ppbwntdu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vwaextpg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163uepwmmnz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163oopvfssz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zmxmncjp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vyocajml.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rtoysnic.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163nnayfmzv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zkvsruvr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163amejlnxo.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163voqujmsn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163gkrmphtn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qveozugz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163bjofiruo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yqrsjnio.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kdxucoag.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163vqvrpgyc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dudacexg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xqwemztl.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zzbwdsum.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ichmvmck.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gzntcmfs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ebqllkud.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163owyxazhd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163omuigsrb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nlmftssf.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fslnzvmb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163siamyqgm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163thitzeyy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163knfbqmef.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ifeshyoc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tocimzvk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nhotavkp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163aupfkyum.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ulumtuff.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wzxvanxp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163riumoccw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zqqjbmwh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163owxtiavm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kwlslkhv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xdsewxrl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163csbezvkq.html


<!-- 参考信息 -->