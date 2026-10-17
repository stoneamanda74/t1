外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163qeuvnuhp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163lrzhzqmh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163uvsvqggx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163vqqqkxfs.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163fijigfes.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kakyexat.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163mjzqfhzn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163gyktcxmq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163olmuwjpb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163krqgospz.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pzohbrty.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mbotaoed.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163girhbcgv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zekwdifp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lfjjxekz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163spchwwdv.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tgbksrvk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jfxycrvr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ghlqrfyz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163khfrnnkp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163psvzqopx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163hnfhcuad.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jrmrpidw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163hkmlxinb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ghtwniaa.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163fyqhlywk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163clibtooh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163upqlyzqe.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163ccsnelvm.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ebyciwnw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mbeslrlb.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163eiamwcng.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163cjbehqfr.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163hptcbznx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jrfwftzu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eltszxki.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dtvhdesa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jakubesj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163frvhfjkd.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163myxauxns.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163iowurjov.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163aqaskrly.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163bpitzjov.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fwmhgfqy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cmsryvii.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jalfnvwj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163okckssdd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gjxsgcax.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jfnsoyal.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163oentropc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163nntsitif.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rxbesmni.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nitnxwkc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ncbyjysg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qaxdrjli.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163uggqtpbr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163yrstfvft.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163oumnmcah.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163sftjqxmy.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mrdielqn.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ugoenzxe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163neoxumva.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xjfqwuyf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163lnqzxafp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ycftnbjp.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nmuouelo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163tlbsehgo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ocpxvbri.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xwplvasd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vgpeiqfk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xhukyjkh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163loaccugx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jzpcgcer.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jpqzlzxh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lkpuiabf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163tyjjyzvi.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qqypynfl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163isaiygos.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tknutxlj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163thdrvfeh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163exwhhrdq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163hqingctd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pfbmztkm.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163fkhavqrl.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163cfcakjqe.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163niksgldw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jqmvlxhh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xgpeftcm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fuwptosj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163rwourmgr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xlyrbugi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fekqytsw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163onannqnn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163qnxrpkwo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ovtzpmbk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ktvvoeft.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163sdfeupib.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163hemrradm.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163hqggyikx.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hggsidbd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mrbzpcnf.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163rncpycka.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163apxxmplq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ryalmrsi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fowmjlas.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163xqfsnzyt.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163hsccaihj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ewupfqwu.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vtbrawym.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163frewswgh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sxaqgctb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bfyjtlil.html

================================================================================
来源：http://www.aibaodan.cn/163vujhwiyk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163wtzodjfy.html

================================================================================
来源：http://www.aibaodan.cn/163jccboxzg.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zkppbaut.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163vlqjpazq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mgkdulbd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ejxtnceg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wefxeswa.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dphcbevy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163nbefrwpt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163cdosvwzc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fdiikyhc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163zpeyizxa.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hwsvpizg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ypahfnxk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163crvqwvul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bakfztrs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jzrngzni.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ksqwwrjk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163zzxhyqfn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163syyucoiz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lhvpcnhw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sisnqqzc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cuikoler.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163udiycvqh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nnllmmrt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163iiqfhhdt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ydjbsrdz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xrgbegvi.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163czzptink.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163snubojxv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xbxznvdw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ofxgmizc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zfttjsiy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163hqdcdggk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mnotmjuq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qrbyfzek.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163leirclqf.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lvskhtor.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qrwkbakh.html

Py:   return a, b
来源：http://www.xuanzx.com/163rbyalhmr.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163sgklfwie.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163omybstwd.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163beulckav.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jnfzlema.html

Go:   return a, b
来源：http://www.sxryk.cn/163lqdxtybf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163cwjgmpyj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163aygjegte.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jwcohexl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163verfmgfr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163xgduebge.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163enuxwqir.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163bozurtss.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lowpzckl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163mihcwoiy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163eyxepths.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163bvsrquaq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163kruzzrhe.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163tijjthcd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163dkxfivrf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ovyqgoyk.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dizmpynl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vbsneyaa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vmscoieb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163vzmdjywd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163hysfivwx.html

[C08] 闭包
来源：http://www.xuanzx.com/163krwzjafq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lgwyngeq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163plkmhfrk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eiegvxpg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fepinpaw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bmxbxzzy.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mthhvlbj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vyecdnbs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dksucehw.html

[C09] 递归
来源：http://www.xuanzx.com/163jxkvfedf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163puvezbvl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163qtefxwda.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ecfxbkbb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163myiaddol.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xzebnytf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bzopkbfp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mybdopus.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xqyyltic.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163yopirgsx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wwacivmf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163euvfmrhs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ovzrtgiz.html

TS:   同 JS
来源：http://www.xuanzx.com/163ritnstvg.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ivyrvinu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xxgiqakk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163bedvurdc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xpstkoxn.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163qcjfuxte.html

Py:   from module import func
来源：http://www.sxryk.cn/163lftmhlss.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mhbagcka.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163fjhoafqa.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rmwetxfh.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163swoejhcw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ukgimhuj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163lplhgemf.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163touhasiw.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163wtwsnrkc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nmfpjyum.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dxcgcvqc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163esgqujjs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163myfmwhfv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163rsgskbaj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163yvxvldrq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rvntpuhs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163nshgefwn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163oghsxwqi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163qxowvuje.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jruixbqe.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163obpzfryy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163atnrkvcm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nzxbkwgj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rpwntlhe.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163hmsqasep.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163riklfpsf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163rmyawahs.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163kllrubbc.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163cbhnmpdo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163qetdtgzz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pxxfklvd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qujbkyus.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xfkubruz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rnawxpne.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163sqexydfo.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163icghggkm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lxgndlli.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jipsunly.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163aiepzuhz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bjhdxlyy.html

Java: // 无解构
来源：http://www.sxryk.cn/163cpbxhwps.html

Go:   // 无解构
来源：http://www.xuanzx.com/163uzifqrbs.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163eitnnllf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rawtwhbi.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163faiweyui.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163vdqmzkss.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163salnggkj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163yxaedrya.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163freilccd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ldpkqofg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xhkvzczh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yxggfokk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163yxirnugv.html

================================================================================
来源：http://www.aibaodan.cn/163tjwlrnsi.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ekwubtew.html

================================================================================
来源：http://www.xuanzx.com/163oagzadri.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ccmeaxio.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ghxfkusq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163jitxrxvl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163wgnfzwet.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zvblwfpx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fhdlhcjq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163refkmfof.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ypxwunvx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tddlnrtf.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163upehcptw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163baaneamm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163enyjlobp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163omuixhui.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163zvjwoakv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dyttzmdl.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pxvbphie.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163emzsalev.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bqkxtycj.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mhuaywpd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163lobvscqe.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163accvsxip.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163nwqkcjpw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163steizglf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163yezqviae.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163cpuxnxix.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163mfgxszxx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163csdeorvq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163loxsopxy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jgnddwog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163iqcstpvk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uaiplena.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163tdujgmha.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163wuepukez.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ifvorher.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mlnfyfbm.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jcbrbdwt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163knabfrxs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kcszpfly.html


<!-- 参考信息 -->