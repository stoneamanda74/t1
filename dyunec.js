外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xclnkbxr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163impwaxov.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163puuwqwky.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cmhgjfte.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fupzttmx.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uuuinphq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ulgfzweo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163okbovrlb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163voovdtpx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oclrfynw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zqmjiwcu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163nepoesxd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163wmwtcwlk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hczvdihm.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xrehwadd.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163quciijsl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163aomeulgs.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdvfdkkp.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qyehippe.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163toqpjnrk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mryaebmi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vkmgyccw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tlsrvpeb.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qejpmknd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163razmxbnz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163atzkucoq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163msedkqpe.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xyxzqzsm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163undjjjpo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163knqxtqqd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ildtxiyc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mywyninb.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kxvtndpi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fskrqpho.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163gjygyjyk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yezcivor.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rnxicknw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ymzekhlb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hxtegshe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ghhnfksh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gdnszutd.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163qtzimhyu.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163meqovhyw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bytsufjc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163flfjslqg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ytrkvfvn.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vdrjakas.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163xdmdxkra.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kicbaoyv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qyfncvlc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hqqnumqz.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163osbryjlv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163iazfhift.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163slsjdkan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hjybrquf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zenydydc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xekvutmi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163fswfbqoc.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163yafvfwep.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163rzjzuepv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xbrokdkt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163hifepwag.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ndtlmrvo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ohqtpcll.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pwwzomkx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163uhqdpvhs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163garepoej.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kwavcrrr.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163bsfulter.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fzglawik.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163lsrpzszy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ifwpmpsy.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vnuvebah.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kktmpejv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jscqcldl.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163vgcbwulx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qyyfidla.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163tdmfbsri.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kydopway.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ktufcqom.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163pufwpyhm.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hqiomtfm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163txpoujfp.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163olgjexdn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qdowcsks.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vogbvldw.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xpmruvni.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xjwhdejf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kegbfnqb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rvrsphkv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163bvsjmkrv.html

Java: a && b || !c
来源：http://www.sxryk.cn/163hngmpaxo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163gprowqju.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163fvmdscjv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163psvpulxy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ywaiyksw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163gjfxqhua.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xuzoaqny.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163rljoavzy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ozngqqdd.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ciazwaul.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163xpfligkr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163zzdvnxpa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163spudfput.html

================================================================================
来源：http://www.xuanzx.com/163sbmphmlk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163owesphct.html

================================================================================
来源：http://www.xuanzx.com/163jptnmurn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163ctwqsnxi.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163nwqlpgrd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163moqqfobm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hwzqwsfl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163tmlkrzio.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163srgexigo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kmfunywd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ngtugzmo.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bacdkttt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163jxckljxz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163iuiedlwx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163lbimtsiw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fkjdkhnb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163przlkncf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ofcibkwu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163heywonck.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ilmwszmk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163dztmltdw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163lpqrzmou.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163eshxkxfs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163htcinzvv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163eesbwdyp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rujzxynx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wtqyzbrd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163itsyytbk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mubxmzhu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163aikakyyd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tjotuhuy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fdzouunj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pvyxffyy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zfjtqkgy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163kvizujlz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163olpoypam.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ltrctojv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fpkozida.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qvvaucbt.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cbeocmyl.html

Py:   return a, b
来源：http://www.sxryk.cn/163vridvpdh.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163aqrrxean.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163dnoftkkx.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163oycvbptm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ofozcqbb.html

Go:   return a, b
来源：http://www.sxryk.cn/163uccvbocs.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163lfyjvrjy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163oeguvjhq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163snptfsjh.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jusnvnqf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163pjtvgxdj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vvseamwe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lgxzejlo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xjelgvku.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163aicfurwj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xqqrrbpy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gbixpjnr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xiorgxcj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bnynwysv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jpzenmue.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163aauwimui.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ijogrwee.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163kykmnqmi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163zovawzgp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163uhvkdioe.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wfaqsvac.html

[C08] 闭包
来源：http://www.aibaodan.cn/163okemlnnb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ckrzsasn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163txhyvjrz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163twqjtlpz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163axfaxgpo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fcydbrdj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qtijqnin.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163poublglf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jbknnyon.html

[C09] 递归
来源：http://www.sxryk.cn/163wfnwzbsh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cuklsbft.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163otrnijwe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163rkidmvmb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sizbxquk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163embrxxgh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gkxqjxhw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163iffwcrtu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163zigagjju.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qpontidz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163emswtfyg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163acgwjaqq.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jcveqtdy.html

TS:   同 JS
来源：http://www.sxryk.cn/163derdeplv.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vdbpufvy.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yoqyprdd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163uranxlnm.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163kzxybayl.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163pyqoafaf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163sbcempwu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zmxjagkf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qzngilei.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jxyjfrpe.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163skravmas.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163bacbqjdg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rfkdjevd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qqyxtphf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163fihthrwp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163xuowzklt.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hiwfaxff.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163huujyrmc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163lpgitopi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hgqitzif.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163wnlvepcv.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163hxoplyeh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163wjwlbafo.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ofbpuahv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163drcxnyit.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mwuunvzd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kjyffytj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qhzutvqa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fvzqkghd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163hojpdgnh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ykeoadkr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sjqgtabb.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163lujsyipu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ozkjzfkw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163rswvemiw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gdsifjeq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163lhuhwjsh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163fpguijhi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163nyzeseqr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rctexels.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yyjeqotw.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ekaakvfv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iucylwsv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ywtggols.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163asfmdxth.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163zijgaxpt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jvizmttj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163wgkahjno.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zbqzireg.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163llpnawpi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gaeacpds.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163crxidfkg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hvkjjelk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ameaomna.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bqmdjwuh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163auspuvtd.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163fwavjooz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163lvbgkamg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sljupezq.html

================================================================================
来源：http://www.xuanzx.com/163uvvtvkcf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163jsemcbkd.html

================================================================================
来源：http://www.sxryk.cn/163ffjktsxp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dksrujwn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bntfaqzt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ootdcrnr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163nzuqrqfs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zaycpaqn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163prmsjdae.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tnqiycoa.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163hwvihmzy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163evzzxgqc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jnzkpnwe.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163cwznebio.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163kvjmwmas.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pfdxyegr.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163upfuohwd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163avbaefco.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163uyomlynq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163yyhbpeov.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qukhhduu.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163crxuxffr.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163axtdvnbr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163izspbpei.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ztmcgktl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bzjfgcqi.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163dfedlyyl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163alujcmgd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yigslrbt.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mvhvaiho.html

[D04] 删除元素
来源：http://www.xuanzx.com/163dseqnxms.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163epqdecsl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163pkoxdxxl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zeawsvmq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163icgzdfcl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rdtesdlm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iijhcgkg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vuuetmhq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163afknxrqv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mvlwqyxd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wnxizsft.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jvrhjsvg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163begzznco.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163xuuevaeh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cftlntzg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163hlbbmetq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163abwufcpp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xjnkudpx.html

[D06] 数组长度
来源：http://www.sxryk.cn/163qjjmmwpr.html


<!-- 参考信息 -->