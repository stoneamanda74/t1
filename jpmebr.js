外链999!wailian999！

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kqtajvau.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163scvmkdmf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ytqvmomz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gvnquvzz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jfjobmse.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cbeghxct.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lrxzahby.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qihmiesc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163rpikxado.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oifyxdyf.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163dcltqbll.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163glmrktbd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qeqaslkj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qjdsjbtj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163mhsyuuhm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163tkhdmthn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ywahdtsa.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163tnwialrr.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163maliphql.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163nxgkpmac.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163fpnntuzv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ymshldgc.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kyjpcnzh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dsvglcrr.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163vkppbcfo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163heyvwbnh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nsxmvsqe.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xfgjisul.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163hhmrxdws.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mqrzeawr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lhlsnqmo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vvtpeasn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jcehcwqh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zeplizul.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wposietf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jndcqvrm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vbetialy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163qnjtnkpl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163iinnvham.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jfalelji.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163sbjvhtjj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163otrjzhqd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ayjhmfmw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163seeiyxvu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163aepisgpe.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wphyddmp.html

[B07] while 循环
来源：http://www.sxryk.cn/163byilovzo.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163rwydhved.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fkquyjit.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gbeghxdq.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xbwhnojf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bweevkzl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163hxghrufx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lwphvmpv.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bydugqkk.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ywwkqhoy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163iqidrrht.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163rsegtfih.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163idhgyqiy.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xphsmrvw.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163orfaaxly.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163zolfvtnj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ranrlfxw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163weskpglo.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163scbaxjhu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163xisjombm.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163xfcakxtd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163neiaqwfd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163delgdwdi.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nxiaipdl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ungvncvf.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163xavljutm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nshbkjqn.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pjvbghgk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mkwqefkx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163bpjljdzr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163mgdfjylb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dqvhfyll.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163fhkkkils.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jznfavxl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163iauxudxr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163rpjhrxni.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163erevpzxg.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163yrwrkqbf.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zarhykem.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163cbnakida.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bwssjlpt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163osbdccph.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gpwzxaiz.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rkqrvije.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kcgcxfom.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ytmpuvtn.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163roggwqps.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163xynkxydy.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ryubqdgr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xdhumfiy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nndxnsno.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yqytpkas.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163gapcvnvm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163inraxmcu.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163pmwtuytz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163icnkwjiu.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qvtsylpc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lqkwqfge.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163wcltlqaj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163twdlubac.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xgrcibyv.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163cudafltk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mufdskax.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tfgveaok.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mfasjpzt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dywvjxsl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qnuxhxxz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ycwjmmth.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dqbnczio.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163lvnkuinx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163lxxptnjy.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163tmtbfubq.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xrqklunz.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163acsbdwsh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163yejmdpms.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163mqfmcvib.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163yqaozwzh.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163hwsbwnfd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jzvnhnfq.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163utvklpfg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163edlhmram.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163klxhksgy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xcscynmf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163ltacfhdy.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ytxficxe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vwgmkffz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163aueariru.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ldxjgtbn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yhevjpup.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163kqhkjcop.html

================================================================================
来源：http://www.aibaodan.cn/163rwhhxqgq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163gkzaauhj.html

================================================================================
来源：http://www.aibaodan.cn/163jpbgswgw.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163zwjyajwu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uxosvihb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lyuztmeh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ahkpymvs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cnubrjhi.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lnhfsqbp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ibxsausw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163glbmiipd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hefjuxjy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pbxdssgl.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163hqzvdvcz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mdgdeyni.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163dydktnui.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bfchfysf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wmrlhmtv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163akpkznsk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163webeghsn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163abnwzegl.html

[C03] 可变参数
来源：http://www.sxryk.cn/163gkkqvbkl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163rmaghwzj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ubdiikdq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jhnelwtr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mwarjagf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xojfmbct.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lnsosffb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zyglbkge.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zfunabnm.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mcxozxyf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163zscxkovw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ttrszwby.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yvalyftf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nffrsqew.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163bjxuqmav.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uydhcqjl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vjasaugi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tvuicihf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163cyotvppk.html

Py:   return a, b
来源：http://www.sxryk.cn/163dpzwkikw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qriludll.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163abnrwnqo.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zmpxlihd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163pywflzbz.html

Go:   return a, b
来源：http://www.xuanzx.com/163ocircnht.html

Ruby: return a, b
来源：http://www.sxryk.cn/163esereiqw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163pnokwitp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nmjphlhn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cpqflnul.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xcrzjall.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uxfjyouq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gqbmtmdu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163dkrnzyal.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ycfeavhb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bzjvuomi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fafmvbhy.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wvcmgdsj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qncihxft.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wuhgxrhx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163mveditgf.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163laefrgih.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ttznknlp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bfoghcun.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163igmdycpo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zwwnserr.html

[C08] 闭包
来源：http://www.xuanzx.com/163wgbvrdts.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gtyxyzjg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163dzslknrx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cmztxnqz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163wbrbvwiu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163gsrmjatc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163maqyeqsh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gpytvnzf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163izrqhssn.html

[C09] 递归
来源：http://www.aibaodan.cn/163hsryfewm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163unlrjtvf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cakthfio.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wtusnhrs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yhzuvxmr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fsgxpegr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ojhvtpvu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hbzamcxp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163aweqfopn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163volwaoov.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qdnqtjxu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163itasdapk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163jojqppti.html

TS:   同 JS
来源：http://www.xuanzx.com/163vnwpizjl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hxnmjpjd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163boyyrddd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dqmjsqmy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ommygaqe.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ogfkfakd.html

Py:   from module import func
来源：http://www.sxryk.cn/163jcvotucb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163uipybggt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163gxqlznpy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hynavzpk.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ztcmihlr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163mefjlllp.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lnnkokjr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pkqhocbm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jvnskjtr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hnrghxrc.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163bsdbzaps.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tggijfmf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ggwdnyjc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163yobhkdji.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rvtxntuu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ahrepavp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163brelfwml.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163eqhvxblz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163aiopledy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cmkkrmnm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163tqfuexbi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163mjwdfnjy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ziirdmrl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xurclfkj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163jgdzflhz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163joepkwzn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xlskvegf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163mzazdqun.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fjcmsnwa.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xkcrhvth.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163adlqizne.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bvtdejvp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wgedjcve.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dvzbylzm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ctzlvkle.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163opazxnhy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163msvmiwjg.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fqnzbqvb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163bjbtgyup.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vmwhhnxn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ochhqehg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163dqcvajmx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163bylwdsun.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zpepjmbv.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163iysrbwrf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163smucuazt.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163erurvvru.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163jxkbchzs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qublnnfl.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tuicnasd.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163zdnvtfwv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ycvjkohl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xtjluaoj.html

================================================================================
来源：http://www.sxryk.cn/163qjlersrn.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163napelwrs.html

================================================================================
来源：http://www.aibaodan.cn/163drjnxubc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163foucdodo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163panjnehq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163wiltahte.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163pbixpnfx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nehbfroq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bzepfpab.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uftqayjw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dlqoxrqb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163iczjhfbe.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163exzcxnoa.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xhxrmhvb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lmplkroc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vaprdbme.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163eecqjuhp.html


<!-- 参考信息 -->